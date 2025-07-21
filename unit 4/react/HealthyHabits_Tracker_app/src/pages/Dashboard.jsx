import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useAuth } from '../components/Auth/AuthProvider';
import { collection, addDoc, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import Chart from 'chart.js/auto';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState({ name: '', goal: 1, category: 'fitness', frequency: 'daily' });
  const [wellnessScore, setWellnessScore] = useState(0);
  const [recommendation, setRecommendation] = useState('');

  useEffect(() => {
    if (!user) return;
    const unsub = onSnapshot(collection(db, `users/${user.uid}/habits`), (snapshot) => {
      const habitList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setHabits(habitList);
      renderCharts(habitList);
      calculateWellnessScore(habitList);
      generateHabitRecommendation(habitList);
    });
    return () => unsub();
  }, [user]);

  const generateHabitRecommendation = (habits) => {
    let low = habits.filter(h => h.completed / h.goal < 0.5);
    if (!low.length) return setRecommendation('Great job! Keep up the consistency.');
    const categories = low.map(h => h.category);
    if (categories.includes('sleep')) setRecommendation('😴 Try to improve your sleep schedule. Add a wind-down routine.');
    else if (categories.includes('hydration')) setRecommendation('💧 Increase your water intake. Maybe add hydration reminders.');
    else if (categories.includes('meditation')) setRecommendation('🧘 Try a 5-minute breathing meditation today.');
    else setRecommendation('Consider balancing your routine. Explore habits in other wellness areas.');
  };

  const calculateWellnessScore = (habits) => {
    if (!habits.length) return setWellnessScore(0);
    let score = 0;
    let tracked = 0;
    habits.forEach(h => {
      const performance = (h.completed / h.goal) * 100;
      if (["fitness", "hydration", "sleep", "meditation"].includes(h.category)) {
        score += performance;
        tracked++;
      }
    });
    const average = tracked ? Math.floor(score / tracked) : 0;
    setWellnessScore(average);

    if (average < 50) {
      alert('⚠️ Your wellness score is dropping! Consider improving your sleep, hydration or exercise.');
    }
  };

  const createHabit = async () => {
    if (!newHabit.name || !user) return;
    await addDoc(collection(db, `users/${user.uid}/habits`), { ...newHabit, completed: 0, streak: 0, lastLogged: null });
    setNewHabit({ name: '', goal: 1, category: 'fitness', frequency: 'daily' });
  };

  const logCompletion = async (habitId, currentCompleted, goal, lastLogged, streak) => {
    if (!user) return;
    const today = new Date().toDateString();
    const isSameDay = lastLogged === today;
    const isYesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toDateString() === lastLogged;
    const habitRef = doc(db, `users/${user.uid}/habits/${habitId}`);
    const updated = Math.min(currentCompleted + 1, goal);

    const newStreak = isSameDay
      ? streak
      : isYesterday
      ? streak + 1
      : 1;

    await updateDoc(habitRef, { completed: updated, lastLogged: today, streak: newStreak });
  };

  const renderCharts = (habitList) => {
    setTimeout(() => {
      habitList.forEach((habit) => {
        const el = document.getElementById(`chart-${habit.id}`);
        if (el && !el.classList.contains('rendered')) {
          new Chart(el, {
            type: 'doughnut',
            data: {
              labels: ['Completed', 'Remaining'],
              datasets: [{
                data: [habit.completed, Math.max(habit.goal - habit.completed, 0)],
                backgroundColor: ['#4ade80', '#f87171']
              }]
            },
            options: { responsive: true, plugins: { legend: { display: false } } }
          });
          el.classList.add('rendered');
        }
      });
    }, 100);
  };

  const getSummary = () => {
    const weekAgo = new Date(new Date().setDate(new Date().getDate() - 7));
    return habits.map(h => {
      const performance = (h.completed / h.goal) * 100;
      const recent = h.lastLogged && new Date(h.lastLogged) >= weekAgo;
      return { ...h, performance: performance.toFixed(0), recent };
    });
  };

  const sendReminders = () => {
    getSummary().forEach(habit => {
      if (habit.completed < habit.goal) {
        alert(`Reminder: Don't forget to complete your "${habit.name}" habit today!`);
      }
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      sendReminders();
    }, 60000 * 60);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [habits]);

  const bestHabit = habits.reduce((prev, curr) => ((curr.completed / curr.goal) > (prev.completed / prev.goal) ? curr : prev), habits[0] || {});
  const worstHabit = habits.reduce((prev, curr) => ((curr.completed / curr.goal) < (prev.completed / prev.goal) ? curr : prev), habits[0] || {});

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.email}</h2>
      <h3>🌟 Wellness Score: {wellnessScore}%</h3>
      <button onClick={logout}>Logout</button>

      <div className="habit-form">
        <input
          value={newHabit.name}
          onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
          placeholder="Habit Name"
        />
        <input
          type="number"
          value={newHabit.goal}
          onChange={(e) => setNewHabit({ ...newHabit, goal: parseInt(e.target.value) })}
          placeholder="Goal Value"
        />
        <select
          value={newHabit.frequency}
          onChange={(e) => setNewHabit({ ...newHabit, frequency: e.target.value })}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
        <select
          value={newHabit.category}
          onChange={(e) => setNewHabit({ ...newHabit, category: e.target.value })}
        >
          <option value="fitness">Fitness</option>
          <option value="hydration">Hydration</option>
          <option value="sleep">Sleep</option>
          <option value="meditation">Meditation</option>
        </select>
        <button onClick={createHabit}>Add Habit</button>
      </div>

      <div className="analytics">
        <h3>📊 Analytics</h3>
        <p>✅ Best Performing Habit: {bestHabit?.name || 'N/A'}</p>
        <p>⚠️ Needs Attention: {worstHabit?.name || 'N/A'}</p>
        <p>Total Habits Tracked: {habits.length}</p>
        <p className="recommendation">🤖 AI Tip: {recommendation}</p>
      </div>

      <div className="habit-list">
        {getSummary().map((habit) => (
          <div key={habit.id} className="habit-card">
            <h3>{habit.name} ({habit.category})</h3>
            <p>{habit.completed}/{habit.goal} ({habit.frequency})</p>
            <p>🔥 Streak: {habit.streak || 0} days</p>
            <p>📈 Weekly Performance: {habit.performance}%</p>
            <canvas id={`chart-${habit.id}`} width="100" height="100"></canvas>
            <button onClick={() => logCompletion(habit.id, habit.completed, habit.goal, habit.lastLogged, habit.streak)}>Log Progress</button>
          </div>
        ))}
      </div>
    </div>
  );
}


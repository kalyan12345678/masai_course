
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TrackerForm from '../components/TrackerForm';
import StreakHeatmap from '../components/StreakHeatmap';
import InsightsPanel from '../components/InsightsPanel';
import useStreaks from '../hooks/useStreaks';
import generateInsights from '../utils/insightsEngine';
import { useAuth } from '../context/AuthContext';
import { db } from '../services/firebase';
import { collection, addDoc, query, where, getDocs, orderBy } from 'firebase/firestore';



const Dashboard = () => {
	const { user, logout } = useAuth();
	const [entries, setEntries] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/login');
			return;
		}
		const fetchEntries = async () => {
			setLoading(true);
			const q = query(
				collection(db, 'entries'),
				where('uid', '==', user.uid),
				orderBy('date', 'desc')
			);
			const snapshot = await getDocs(q);
			setEntries(snapshot.docs.map(doc => doc.data()));
			setLoading(false);
		};
		fetchEntries();
	}, [user, navigate]);

	const handleAddEntry = async ({ habit, reflection }) => {
		if (!user) return;
		const today = new Date().toISOString().slice(0, 10);
		const entry = { uid: user.uid, date: today, habit, reflection };
		await addDoc(collection(db, 'entries'), entry);
		setEntries(prev => [entry, ...prev]);
	};

	const streaks = useStreaks(entries);
	const insights = generateInsights(streaks);

	return (
		<div style={{ maxWidth: 600, margin: '32px auto', padding: 24, background: '#fff', borderRadius: 8 }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<h2>Student Dashboard</h2>
				<button onClick={logout} style={{ background: '#222', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: 4 }}>Logout</button>
			</div>
			<TrackerForm onSubmit={handleAddEntry} />
			<div style={{ margin: '24px 0' }}>
				<StreakHeatmap streaks={streaks} />
			</div>
			<InsightsPanel insights={insights} />
			<div style={{ marginTop: 32 }}>
				<h3>Journal Entries</h3>
				{loading ? <p>Loading...</p> : (
					<ul>
						{entries.map((entry, i) => (
							<li key={i}>
								<strong>{entry.date}</strong>: {entry.habit} - {entry.reflection}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Dashboard;

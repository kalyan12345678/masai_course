import { useContext, useRef, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from '../components/TaskItem';

const Tasks = () => {
  const { tasks, addTask, toggleTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title.trim(), desc);
    setTitle('');
    setDesc('');
    inputRef.current.focus();
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div>
      <h1>Tasks</h1>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          autoFocus
          type="text"
          value={title}
          placeholder="Task title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          value={desc}
          placeholder="Description (optional)"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit" >Add Task</button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks yet! Add one to get started.</p>
      ) : (
        <>
          <ul>
            {tasks.map(task => (
              <TaskItem key={task.id} task={task} onToggle={toggleTask} />
            ))}
          </ul>
          <p>{completedCount} of {tasks.length} tasks completed</p>
        </>
      )}
    </div>
  );
};

export default Tasks;

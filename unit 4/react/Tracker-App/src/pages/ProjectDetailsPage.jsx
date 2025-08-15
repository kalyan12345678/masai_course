
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProjects } from '../components/ProjectsContext';
import { useTasks } from '../components/TasksContext';

const priorities = ['Low', 'Medium', 'High'];


const PAGE_SIZE = 5;

function useDebouncedValue(value, delay) {
  const [debounced, setDebounced] = useState(value);
  React.useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const { projects } = useProjects();
  const { tasksByProject, addTask, editTask, deleteTask } = useTasks();
  const project = projects.find(p => p.id === id);

  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterCompleted, setFilterCompleted] = useState('All');
  const [sortBy, setSortBy] = useState('created');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebouncedValue(search, 400);

  if (!project) return <div>Project not found.</div>;

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(id, { title: taskTitle, completed: false, priority, created: Date.now() });
    setTaskTitle('');
    setPriority('Low');
  };

  const handleToggleComplete = (task) => {
    editTask(id, { ...task, completed: !task.completed });
  };

  let tasks = tasksByProject[id] || [];

  // Filtering
  if (filterPriority !== 'All') {
    tasks = tasks.filter(t => t.priority === filterPriority);
  }
  if (filterCompleted !== 'All') {
    tasks = tasks.filter(t => t.completed === (filterCompleted === 'Completed'));
  }
  if (debouncedSearch) {
    tasks = tasks.filter(t => t.title.toLowerCase().includes(debouncedSearch.toLowerCase()));
  }

  // Sorting
  tasks = [...tasks].sort((a, b) => {
    if (sortBy === 'created') return (b.created || 0) - (a.created || 0);
    if (sortBy === 'priority') return priorities.indexOf(b.priority) - priorities.indexOf(a.priority);
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(tasks.length / PAGE_SIZE);
  const paginatedTasks = tasks.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p><b>Created At:</b> {project.createdAt ? new Date(project.createdAt).toLocaleString() : 'N/A'}</p>

      <h3>Tasks</h3>
      <form onSubmit={handleAddTask} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={e => setTaskTitle(e.target.value)}
          required
        />
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          {priorities.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <button type="submit">Add Task</button>
      </form>

      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          style={{ marginRight: 8 }}
        />
        <select value={filterPriority} onChange={e => { setFilterPriority(e.target.value); setPage(1); }}>
          <option value="All">All Priorities</option>
          {priorities.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <select value={filterCompleted} onChange={e => { setFilterCompleted(e.target.value); setPage(1); }} style={{ marginLeft: 8 }}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ marginLeft: 8 }}>
          <option value="created">Sort by Created</option>
          <option value="priority">Sort by Priority</option>
        </select>
      </div>

      <ul>
        {paginatedTasks.length === 0 ? (
          <li>No tasks found.</li>
        ) : (
          paginatedTasks.map(task => (
            <li key={task.id} style={{ marginBottom: 12, padding: 8, border: '1px solid #ccc', borderRadius: 6 }}>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title} ({task.priority})
              </span>
              <button onClick={() => handleToggleComplete(task)} style={{ marginLeft: 8 }}>
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button onClick={() => deleteTask(id, task.id)} style={{ marginLeft: 8 }}>Delete</button>
            </li>
          ))
        )}
      </ul>

      {totalPages > 1 && (
        <div style={{ marginTop: 16 }}>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
          <span style={{ margin: '0 8px' }}>Page {page} of {totalPages}</span>
          <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsPage;

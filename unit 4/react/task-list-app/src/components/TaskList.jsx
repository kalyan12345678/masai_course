import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, clearTasks } from '../features/tasksSlice';

const TaskList = () => {
  const [taskText, setTaskText] = useState('');
  const tasks = useSelector(state => state.tasks.items);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({ id: Date.now(), text: taskText }));
      setTaskText('');
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <input
        type="text"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearTasks())}>Clear All</button>
    </div>
  );
};

export default TaskList;

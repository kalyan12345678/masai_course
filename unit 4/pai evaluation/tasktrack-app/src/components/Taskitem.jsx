import React from 'react';
const TaskItem = ({ task, onToggle }) => (
  <li>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggle(task.id)}
    />
    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.title} - {task.description}
    </span>
  </li>
);

export default TaskItem;

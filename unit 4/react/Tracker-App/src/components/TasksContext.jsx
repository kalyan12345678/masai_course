import React, { createContext, useContext, useState } from 'react';

const TasksContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  // { [projectId]: [task, ...] }
  const [tasksByProject, setTasksByProject] = useState({});

  const addTask = (projectId, task) => {
    setTasksByProject(prev => ({
      ...prev,
      [projectId]: [...(prev[projectId] || []), { ...task, id: Date.now().toString() }]
    }));
  };

  const editTask = (projectId, updatedTask) => {
    setTasksByProject(prev => ({
      ...prev,
      [projectId]: prev[projectId].map(task => task.id === updatedTask.id ? updatedTask : task)
    }));
  };

  const deleteTask = (projectId, taskId) => {
    setTasksByProject(prev => ({
      ...prev,
      [projectId]: prev[projectId].filter(task => task.id !== taskId)
    }));
  };

  return (
    <TasksContext.Provider value={{ tasksByProject, addTask, editTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

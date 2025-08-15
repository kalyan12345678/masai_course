import React, { createContext, useContext, useState } from 'react';

const ProjectsContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);


  const addProject = (project) => {
    setProjects(prev => [...prev, { ...project, id: Date.now().toString() }]);
  };

  const editProject = (updatedProject) => {
    setProjects(prev => prev.map(p => p.id === updatedProject.id ? updatedProject : p));
  };

  const deleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProjectsContext.Provider value={{ projects, addProject, editProject, deleteProject }}>
      {children}
    </ProjectsContext.Provider>
  );
};

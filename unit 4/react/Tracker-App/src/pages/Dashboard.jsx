

import React from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../components/ProjectsContext';

const Dashboard = () => {
  const { projects, deleteProject } = useProjects();
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/add">
        <button>Add New Project</button>
      </Link>
      <ul>
        {projects.length === 0 ? (
          <li>No projects yet. Add one!</li>
        ) : (
          projects.map(project => (
            <li key={project.id} style={{ margin: '16px 0', padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><b>Created At:</b> {project.createdAt ? new Date(project.createdAt).toLocaleString() : 'N/A'}</p>
              <Link to={`/project/${project.id}`}><button>View Details</button></Link>
              <Link to={`/edit/${project.id}`}><button>Edit</button></Link>
              <button onClick={() => deleteProject(project.id)} style={{ marginLeft: 8, background: '#e74c3c', color: '#fff' }}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Dashboard;

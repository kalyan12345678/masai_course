

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../components/ProjectsContext';

const AddProjectPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const { addProject } = useProjects();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ title, description, createdAt: Date.now() });
    navigate('/'); // Go back to dashboard
  };

  return (
    <div>
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{ marginBottom: 12, padding: 8 }}
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
          style={{ marginBottom: 12, padding: 8 }}
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProjectPage;

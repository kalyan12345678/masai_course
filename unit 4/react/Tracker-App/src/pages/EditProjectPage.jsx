
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProjects } from '../components/ProjectsContext';

const EditProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, editProject } = useProjects();
  const project = projects.find(p => p.id === id);

  const [title, setTitle] = useState(project ? project.title : '');
  const [description, setDescription] = useState(project ? project.description : '');

  if (!project) return <div>Project not found.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    editProject({ ...project, title, description });
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16, background: '#222', padding: 16, borderRadius: 8, maxWidth: 600 }}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{ padding: 8, background: '#333', color: '#fff', border: '1px solid #444', borderRadius: 4, flex: 1 }}
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
          style={{ padding: 8, background: '#333', color: '#fff', border: '1px solid #444', borderRadius: 4, flex: 2, minHeight: 40 }}
        />
        <button type="submit" style={{ background: '#111', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: 4 }}>Save Changes</button>
      </form>
    </div>
  );
};

export default EditProjectPage;

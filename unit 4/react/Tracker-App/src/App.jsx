
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import { ProjectsProvider } from './components/ProjectsContext';
import { TasksProvider } from './components/TasksContext';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import AddProjectPage from './pages/AddProjectPage';
import EditProjectPage from './pages/EditProjectPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <AuthProvider>
      <ProjectsProvider>
        <TasksProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route path="/project/:id" element={
                <PrivateRoute>
                  <ProjectDetailsPage />
                </PrivateRoute>
              } />
              <Route path="/add" element={
                <PrivateRoute>
                  <AddProjectPage />
                </PrivateRoute>
              } />
              <Route path="/edit/:id" element={
                <PrivateRoute>
                  <EditProjectPage />
                </PrivateRoute>
              } />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </BrowserRouter>
        </TasksProvider>
      </ProjectsProvider>
    </AuthProvider>
  );
}

export default App;

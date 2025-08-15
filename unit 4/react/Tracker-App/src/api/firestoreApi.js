import { db } from '../firebase';
import {
  collection,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  addDoc
} from 'firebase/firestore';

// Projects
export const addProjectToFirestore = async (project) => {
  const ref = await addDoc(collection(db, 'projects'), project);
  return ref.id;
};

export const listenProjects = (callback) => {
  const q = collection(db, 'projects');
  return onSnapshot(q, (snapshot) => {
    const projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(projects);
  });
};

export const deleteProjectFromFirestore = async (id) => {
  await deleteDoc(doc(db, 'projects', id));
};

export const updateProjectInFirestore = async (id, project) => {
  await updateDoc(doc(db, 'projects', id), project);
};

// Tasks
export const addTaskToFirestore = async (projectId, task) => {
  const ref = await addDoc(collection(db, 'projects', projectId, 'tasks'), task);
  return ref.id;
};

export const listenTasks = (projectId, callback) => {
  const q = collection(db, 'projects', projectId, 'tasks');
  return onSnapshot(q, (snapshot) => {
    const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(tasks);
  });
};

export const deleteTaskFromFirestore = async (projectId, taskId) => {
  await deleteDoc(doc(db, 'projects', projectId, 'tasks', taskId));
};

export const updateTaskInFirestore = async (projectId, taskId, task) => {
  await updateDoc(doc(db, 'projects', projectId, 'tasks', taskId), task);
};

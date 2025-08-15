import { db } from '../firebase';
import { ref, push, set, onValue, remove, update } from 'firebase/database';

// Projects
export const addProjectToFirebase = async (project) => {
	const newRef = push(ref(db, 'projects'));
	await set(newRef, project);
	return newRef.key;
};

export const listenProjects = (callback) => {
	const projectsRef = ref(db, 'projects');
	return onValue(projectsRef, (snapshot) => {
		const data = snapshot.val() || {};
		const projects = Object.entries(data).map(([id, value]) => ({ id, ...value }));
		callback(projects);
	});
};

export const deleteProjectFromFirebase = async (id) => {
	await remove(ref(db, `projects/${id}`));
};

export const updateProjectInFirebase = async (id, project) => {
	await update(ref(db, `projects/${id}`), project);
};

// Tasks
export const addTaskToFirebase = async (projectId, task) => {
	const newRef = push(ref(db, `tasks/${projectId}`));
	await set(newRef, task);
	return newRef.key;
};

export const listenTasks = (projectId, callback) => {
	const tasksRef = ref(db, `tasks/${projectId}`);
	return onValue(tasksRef, (snapshot) => {
		const data = snapshot.val() || {};
		const tasks = Object.entries(data).map(([id, value]) => ({ id, ...value }));
		callback(tasks);
	});
};

export const deleteTaskFromFirebase = async (projectId, taskId) => {
	await remove(ref(db, `tasks/${projectId}/${taskId}`));
};

export const updateTaskInFirebase = async (projectId, taskId, task) => {
	await update(ref(db, `tasks/${projectId}/${taskId}`), task);
};

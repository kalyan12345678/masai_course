import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = () => axios.get(`${API_URL}/users`);
export const getUserById = (id) => axios.get(`${API_URL}/users/${id}`);
export const getPostsByUser = (id) => axios.get(`${API_URL}/users/${id}/posts`);

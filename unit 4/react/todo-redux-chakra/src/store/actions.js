// Action creators for todos
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionTypes";

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });

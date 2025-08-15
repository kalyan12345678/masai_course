import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.items = action.payload;
    },
    addProject: (state, action) => {
      state.items.push(action.payload);
    },
    updateProject: (state, action) => {
      const idx = state.items.findIndex(p => p.id === action.payload.id);
      if (idx > -1) state.items[idx] = action.payload;
    },
    deleteProject: (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload);
    },
  },
});

export const { setProjects, addProject, updateProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;

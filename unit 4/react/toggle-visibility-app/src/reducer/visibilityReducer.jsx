export const initialState = {
  isVisible: false,
};

export function visibilityReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
}

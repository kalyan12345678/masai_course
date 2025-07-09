import {
  GET_COFFEE_LOADING,
  GET_COFFEE_SUCCESS,
  GET_COFFEE_ERROR,
} from "./coffee.types";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COFFEE_LOADING:
      return { ...state, loading: true, error: false };
    case GET_COFFEE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_COFFEE_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

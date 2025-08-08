// coffee.actions.js

import axios from "axios";
import { GET_COFFEE_LOADING, GET_COFFEE_SUCCESS, GET_COFFEE_ERROR } from "./coffee.types";

// order: "", "asc", "desc"
export const getCoffee = (order = "") => async (dispatch) => {
  dispatch({ type: GET_COFFEE_LOADING });
  try {
    let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee";
    if (order === "asc" || order === "desc") {
      url += `?sort=price&order=${order}`;
    }
    const res = await axios.get(url);
    // API returns {data: [...], totalPages: n, page: n}
    dispatch({ type: GET_COFFEE_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: GET_COFFEE_ERROR, payload: error.message });
  }
};

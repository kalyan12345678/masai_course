import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { coffeeReducer } from "./coffee/coffee.reducer";

const rootReducer = combineReducers({
  coffee: coffeeReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

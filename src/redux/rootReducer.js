import { combineReducers } from "redux";

import { mealsReducer } from "./meals/reducer";

export const rootReducer = combineReducers({
  meals: mealsReducer,
});

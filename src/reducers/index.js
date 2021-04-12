import { combineReducers } from "redux";

import heroReducer from "./heroRducer";
import mealsReducer from "./mealsReducer";

export default combineReducers({
  hero: heroReducer,
  meals: mealsReducer,
});

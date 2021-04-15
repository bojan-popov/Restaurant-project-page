import { combineReducers } from "redux";

import heroReducer from "./heroRducer";
import mealsReducer from "./mealsReducer";
import orderNowReducer from "./orderNowReducer";

export default combineReducers({
  hero: heroReducer,
  meals: mealsReducer,
  orders: orderNowReducer,
});

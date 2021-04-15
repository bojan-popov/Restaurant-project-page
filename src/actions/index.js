import hero from "../apis/hero";
import meals from "../apis/meals";

export const heroData = () => async (dispatch) => {
  const result = await hero.get("/");

  dispatch({ type: "FETCH_HERO", payload: result.data.hero });
};

export const mealsData = () => async (dispatch) => {
  const result = await meals.get("/");

  dispatch({ type: "FETCH_MEALS", payload: result.data.meals });
};

export const orderNowData = (id) => {
  return { type: "GET_MEAL_INFO", payload: id };
};

export const addOrderCounter = (id) => {
  return { type: "ADD_MEAL_COUNTER", payload: id };
};

export const reduceOrderCounter = (id) => {
  return { type: "REDUCE_MEAL_COUNTER", payload: id };
};

export const deleteOrder = (id) => {
  return { type: "DELETE_ORDER", payload: id };
};

export const deleteOrders = () => {
  return { type: "DELETE_ORDERS" };
};

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

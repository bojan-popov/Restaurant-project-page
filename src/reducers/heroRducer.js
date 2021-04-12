const heroReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_HERO":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default heroReducer;

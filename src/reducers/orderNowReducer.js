const orderNowReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_MEAL_INFO":
      let tempState = state.find((item) => item.id === action.payload);
      if (tempState) {
        return [
          ...state.filter((item) => item.id !== action.payload),
          { id: tempState.id, qty: tempState.qty + 1 },
        ];
      }
      return [...state, { id: action.payload, qty: 1 }];
    case "ADD_MEAL_COUNTER":
      return state.map((item) =>
        item.id === action.payload ? { id: item.id, qty: item.qty + 1 } : item
      );
    case "REDUCE_MEAL_COUNTER":
      return state.map((item) =>
        item.id === action.payload ? { id: item.id, qty: item.qty - 1 } : item
      );
    case "DELETE_ORDER":
      return state.filter((item) => item.id !== action.payload);
    case "DELETE_ORDERS":
      return [];
    default:
      return state;
  }
};

export default orderNowReducer;

import { INCREMENT, DECREMENT, RESET } from "./ActionTypes";
const initialState = {
  counter: 0,
};
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : state.counter,
      };
    case RESET:
      return { ...state,
        counter: state.counter = 0 };
    default:
      return state;
  }
};

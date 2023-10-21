import { INCREMENT, DECREMENT, RESET } from "./ActionTypes";
export const fazetelincrement = () => {
  return { type: INCREMENT };
};
export const decrementHandler = () => {
  return { type: DECREMENT };
};
export const resetHandler = () => {
  return { type: RESET };
};

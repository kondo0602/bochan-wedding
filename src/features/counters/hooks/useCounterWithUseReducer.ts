import { useReducer } from "react";

export const useCounterWithUseReducer = () => {
  const initialState = { count: 0, isError: false };

  type ACTIONTYPE =
    | { type: "increment" }
    | { type: "decrement" }
    | { type: "double" };

  const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
    switch (action.type) {
      case "increment":
        return 999 < state.count + 1
          ? { count: state.count, isError: true }
          : { count: state.count + 1, isError: false };
      case "decrement":
        return state.count - 1 < -99
          ? { count: state.count, isError: true }
          : { count: state.count - 1, isError: false };
      case "double":
        return state.count * 2 < -99 || 999 < state.count * 2
          ? { count: state.count, isError: true }
          : { count: state.count * 2, isError: false };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

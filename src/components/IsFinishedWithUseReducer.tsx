import { useReducer } from "react";
import { IsFinishedPresentor } from "./isFinishedPresentor";

export const IsFinishedWithUseReducer = () => {
  const initialState = { isFinished: false };

  type ACTIONTYPE = { type: "finish" };

  const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
    switch (action.type) {
      case "finish":
        return { isFinished: true };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <IsFinishedPresentor
      title={"Finish(use-Reducer)"}
      isFinished={state.isFinished}
      handleFinish={() => dispatch({ type: "finish" })}
    />
  );
};

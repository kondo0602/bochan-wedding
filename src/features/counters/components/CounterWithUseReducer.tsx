import * as React from "react";
import { useCounterWithUseReducer as useCounter } from "../hooks/useCounterWithUseReducer";
import { Counter } from "./CounterPresenter";

export const CounterWithUseReducer = () => {
  const { state, dispatch } = useCounter();

  return (
    <Counter
      title="Counter(use-reducer)"
      count={state.count}
      isError={state.isError}
      increment={() => dispatch({ type: "increment" })}
      decrement={() => dispatch({ type: "decrement" })}
      double={() => dispatch({ type: "double" })}
    />
  );
};

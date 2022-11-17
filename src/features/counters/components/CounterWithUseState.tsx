import * as React from "react";
import { useCounterWithUseState as useCounter } from "../hooks/useCounterWithUseState";
import { Counter } from "./CounterPresenter";

export const CounterWithUseState = () => {
  const { count, error, increment, decrement, double } = useCounter();

  return (
    <Counter
      title="Counter(use-state)"
      count={count}
      isError={error}
      increment={increment}
      decrement={decrement}
      double={double}
    />
  );
};

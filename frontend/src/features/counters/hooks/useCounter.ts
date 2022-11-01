import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  const [error, setError] = useState<boolean>(false);

  const increment = () => {
    if (999 < count + 1) {
      setError(true);
      return;
    }

    setCount((prevCount) => prevCount + 1);
    setError(false);
  };

  const decrement = () => {
    if (count - 1 < -99) {
      setError(true);
      return;
    }
    setCount((prevCount) => prevCount - 1);
    setError(false);
  };

  const double = () => {
    if (count * 2 < -99 || 999 < count * 2) {
      setError(true);
      return;
    }
    setCount((prevCount) => prevCount * 2);
    setError(false);
  };

  return { count, error, increment, decrement, double };
};

export default useCounter;

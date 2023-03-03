import { BingoNumber } from "@/types/BingoNumber";
import { useState } from "react";

const getInitialNumbers = (): BingoNumber[] => {
  const numbers: BingoNumber[] = [];
  for (let i = 0; i < 75; i++) {
    numbers.push({ number: i + 1, isHit: false });
  }
  return numbers;
};

export const useBingo = () => {
  // TODO: useReducerで書き換える
  const [numbers, setNumbers] = useState<BingoNumber[]>(getInitialNumbers());
  const [pickedNumber, setPickedNumber] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = (): void => {
    const unhitNumbers = numbers.filter((number) => !number.isHit);
    const pickedNumber =
      unhitNumbers[Math.floor(Math.random() * unhitNumbers.length)];
    pickedNumber.isHit = true;
    setNumbers([...numbers]);
    setPickedNumber(pickedNumber.number);
    setIsRunning(false);
  };

  return {
    numbers,
    pickedNumber,
    isRunning,
    handleStart,
    handleStop,
  };
};

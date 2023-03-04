import { BingoNumber, ColorCode } from "@/types/BingoNumber";
import { useState } from "react";
import { useDrumrollSound } from "./useDrumrollSound";
import { useSymbalSound } from "./useSymabalSound";

const getRandomColor = (): ColorCode => {
  const colors = ["#ffa724", "#fe6d5d", "#a4f9b8", "#a4f9b8", "#3c83be"];

  return colors[Math.floor(Math.random() * colors.length)] as ColorCode;
};

const getInitialNumbers = (): BingoNumber[] => {
  const numbers: BingoNumber[] = [];
  for (let n = 0; n < 15; n++) {
    for (let m = 0; m < 5; m++) {
      numbers.push({
        number: n + m * 15 + 1,
        isHit: false,
        color: getRandomColor(),
      });
    }
  }

  return numbers;
};

export const useBingo = () => {
  // TODO: useReducerで書き換える
  const [numbers, setNumbers] = useState<BingoNumber[]>(getInitialNumbers());
  const [pickedNumber, setPickedNumber] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const { playDrumroll, stopDrumroll } = useDrumrollSound();
  const playSymbal = useSymbalSound();

  const handleStart = () => {
    setIsRunning(true);
    playDrumroll();
  };

  const handleStop = (): void => {
    const unhitNumbers = numbers.filter((number) => !number.isHit);
    const pickedNumber =
      unhitNumbers[Math.floor(Math.random() * unhitNumbers.length)];
    pickedNumber.isHit = true;
    setNumbers([...numbers]);
    setPickedNumber(pickedNumber.number);
    setIsRunning(false);
    stopDrumroll();
    playSymbal();
  };

  return {
    numbers,
    pickedNumber,
    isRunning,
    handleStart,
    handleStop,
  };
};

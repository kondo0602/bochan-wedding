import { useAnimationFrame } from "@/hooks/useAnimationFrame";
import { getRandomNumber } from "@/utils/getRandomNumber";
import { useState } from "react";
import { LargeWhiteNumber } from "./LargeWhiteNumber";

export const ShuffleNumber = () => {
  const [count, setCount] = useState<number>(0);

  useAnimationFrame(() => {
    setCount(getRandomNumber(1, 75));
  });

  return <LargeWhiteNumber number={count} />;
};

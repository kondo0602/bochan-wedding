// @see: https://css-tricks.com/using-requestanimationframe-with-react-hooks/
import { getRandomNumber } from "@/utils/getRandomNumber";
import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const useAnimationFrame = (callback: any) => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const animate = (time: any) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current as number);
  }, []); // Make sure the effect runs only once
};

export const ShuffleNumber = () => {
  const [count, setCount] = useState<number>(0);

  useAnimationFrame(() => {
    // Pass on a function to the setter of the state
    // to make sure we always have the latest state
    setCount(getRandomNumber(1, 75));
  });

  return (
    <Typography color="white" sx={{ fontSize: 200 }}>
      {count}
    </Typography>
  );
};

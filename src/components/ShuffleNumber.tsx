import { useAnimationFrame } from "@/hooks/useAnimationFrame";
import { getRandomNumber } from "@/utils/getRandomNumber";
import { Typography } from "@mui/material";
import { useState } from "react";

export const ShuffleNumber = () => {
  const [count, setCount] = useState<number>(0);

  useAnimationFrame(() => {
    setCount(getRandomNumber(1, 75));
  });

  return (
    <Typography color="white" sx={{ fontSize: 200 }}>
      {count}
    </Typography>
  );
};

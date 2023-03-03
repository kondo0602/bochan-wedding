import { Box, Typography, Grid } from "@mui/material";
import { useState } from "react";
import { HalfScreen } from "./HalfScreen";
import { Counter } from "./HitButton";

export const BingoFullScreen = () => {
  type Number = {
    number: number;
    isHit: boolean;
  };

  const getInitialNumbers = (): Number[] => {
    const numbers: Number[] = [];
    for (let i = 0; i < 75; i++) {
      numbers.push({ number: i + 1, isHit: false });
    }
    return numbers;
  };

  // TODO: useReducerで書き換える
  const [numbers, setNumbers] = useState<Number[]>(getInitialNumbers());
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        background: "white",
      }}
    >
      <HalfScreen>
        <Counter
          isRunning={isRunning}
          handleStart={handleStart}
          handleStop={handleStop}
          pickedNumber={pickedNumber}
        />
      </HalfScreen>
      <HalfScreen>
        <Typography>これまでに出た数字は...</Typography>
        {/* TODO: 15ごとに縦に並んだ方が見やすい */}
        <Grid container columns={5} spacing={1}>
          {numbers.map((number) => (
            <Grid
              component="div"
              item
              xs={1}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography color={number.isHit ? "black" : "lightGray"}>
                {number.number}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </HalfScreen>
    </Box>
  );
};

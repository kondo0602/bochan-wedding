import { useBingo } from "@/domains/bingo/hooks/useBingo";
import { Box, Typography, Grid, Stack } from "@mui/material";
import { BingoLeftScreen } from "./BingoLeftScreen";
import { BingoRightScreen } from "./BingoRightScreen";

export const BingoFullScreen = () => {
  const {
    numbers,
    pickedNumber,
    isRunning,
    isFinished,
    handleStart,
    handleStop,
  } = useBingo();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        background: "white",
      }}
    >
      <BingoLeftScreen
        pickedNumber={pickedNumber}
        isRunning={isRunning}
        isFinished={isFinished}
        handleStart={handleStart}
        handleStop={handleStop}
      />
      <BingoRightScreen numbers={numbers} />
    </Box>
  );
};

import { useBingo } from "@/domains/bingo/hooks/useBingo";
import { BingoNumber } from "@/types/BingoNumber";
import { Box, Typography, Grid, Stack } from "@mui/material";
import { BingoLeftScreen } from "./BingoLeftScreen";
import { BingoRightScreen } from "./BingoRightScreen";

type Props = {
  numbers: BingoNumber[];
  pickedNumber: number;
  isRunning: boolean;
  isFinished: boolean;
  handleStart: () => void;
  handleStop: () => void;
};

export const BingoFullScreen = ({
  numbers,
  pickedNumber,
  isRunning,
  isFinished,
  handleStart,
  handleStop,
}: Props) => {
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

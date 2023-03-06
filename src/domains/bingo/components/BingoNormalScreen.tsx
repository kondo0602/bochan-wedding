import { BingoNumber } from "@/types/BingoNumber";
import { Box, Button } from "@mui/material";

type Props = {
  numbers: BingoNumber[];
  pickedNumber: number;
  isRunning: boolean;
  isFinished: boolean;
  handleStart: () => void;
  handleStop: () => void;
  handleFullScreen: () => void;
};

export const BingoNormalScreen = ({
  numbers,
  pickedNumber,
  isRunning,
  isFinished,
  handleStart,
  handleStop,
  handleFullScreen,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button variant="contained" onClick={handleFullScreen}>
        全画面モード
      </Button>
    </Box>
  );
};

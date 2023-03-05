import { Box, Button, Stack, Typography } from "@mui/material";
import { BingoStartButton } from "./BingoStartButton";
import { BingoStopButton } from "./BingoStopButton";

type Props = {
  pickedNumber: number;
  isRunning: boolean;
  isFinished: boolean;
  handleStart: () => void;
  handleStop: () => void;
};

export const BingoLeftScreen = ({
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
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${"/images/IMG_04962.jpg"})`,
        backgroundSize: "cover",
      }}
    >
      <Stack
        spacing={4}
        sx={{
          width: 400,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {isRunning ? (
          <BingoStopButton handleStop={handleStop} />
        ) : (
          <BingoStartButton
            pickedNumber={pickedNumber}
            isFinished={isFinished}
            handleStart={handleStart}
          />
        )}
      </Stack>
    </Box>
  );
};

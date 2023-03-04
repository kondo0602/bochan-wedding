import { Stack, Typography, Button } from "@mui/material";
import { ShuffleNumber } from "./ShuffleNumber";

type Props = {
  isRunning: boolean;
  handleStart: () => void;
  handleStop: () => void;
  pickedNumber: number;
};

export const Counter = ({
  isRunning,
  handleStart,
  handleStop,
  pickedNumber,
}: Props) => {
  return (
    <Stack spacing={4}>
      {isRunning ? (
        <>
          <ShuffleNumber />
          <Button variant="contained" onClick={handleStop}>
            STOP!
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h1">
            {pickedNumber !== 0 ? pickedNumber : "?"}
          </Typography>
          <Button variant="contained" onClick={handleStart}>
            START!
          </Button>
        </>
      )}
    </Stack>
  );
};

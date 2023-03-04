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
    <Stack spacing={4} sx={{ width: 160, textAlign: "center" }}>
      {isRunning ? (
        <>
          <ShuffleNumber />
          <Button variant="contained" onClick={handleStop} sx={{ height: 50 }}>
            STOP!
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h1" color="white">
            {pickedNumber !== 0 ? pickedNumber : "?"}
          </Typography>
          <Button variant="contained" onClick={handleStart} sx={{ height: 50 }}>
            START!
          </Button>
        </>
      )}
    </Stack>
  );
};

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
    <Stack
      spacing={4}
      sx={{
        width: 400,
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {isRunning ? (
        <>
          <ShuffleNumber />
          <Button
            variant="contained"
            onClick={handleStop}
            sx={{ width: 150, height: 50 }}
          >
            STOP!
          </Button>
        </>
      ) : (
        <>
          <Typography color="white" sx={{ fontSize: 200 }}>
            {pickedNumber !== 0 ? pickedNumber : "?"}
          </Typography>
          <Button
            variant="contained"
            onClick={handleStart}
            sx={{ width: 150, height: 50 }}
          >
            START!
          </Button>
        </>
      )}
    </Stack>
  );
};

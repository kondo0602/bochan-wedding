import { LargeWhiteNumber } from "@/components/LargeWhiteNumber";
import { Typography, Button } from "@mui/material";

type Props = {
  pickedNumber: number;
  handleStart: () => void;
  isFinished: boolean;
};

export const BingoStartButton = ({
  pickedNumber,
  isFinished,
  handleStart,
}: Props) => {
  return (
    <>
      <LargeWhiteNumber number={pickedNumber} />
      <Button
        variant="contained"
        onClick={handleStart}
        sx={{ width: 150, height: 50 }}
        disabled={isFinished}
      >
        START!
      </Button>
    </>
  );
};

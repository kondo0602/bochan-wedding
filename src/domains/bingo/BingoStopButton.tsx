import { ShuffleNumber } from "@/components/ShuffleNumber";
import { Button } from "@mui/material";

type Props = {
  handleStop: () => void;
};

export const BingoStopButton = ({ handleStop }: Props) => {
  return (
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
  );
};

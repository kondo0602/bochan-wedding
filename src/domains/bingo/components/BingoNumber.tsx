import { Box, Typography } from "@mui/material";
import { BingoNumber } from "@/types/BingoNumber";

type Props = {
  number: BingoNumber;
};

export const BingoHitNumber = ({ number }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 45,
        height: 45,
        border: 4,
        borderRadius: "50%",
        borderColor: number.isHit ? number.color : "lightGray",
        pb: 0.5,
      }}
    >
      <Typography
        color={number.isHit ? "black" : "lightGray"}
        sx={{
          fontSize: 16,
        }}
      >
        {number.number}
      </Typography>
    </Box>
  );
};

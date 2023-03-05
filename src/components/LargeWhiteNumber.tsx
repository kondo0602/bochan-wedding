import { Typography } from "@mui/material";

type Props = {
  number?: number;
};

export const LargeWhiteNumber = ({ number }: Props) => {
  return (
    <Typography color="white" sx={{ fontSize: 200 }}>
      {number === 0 ? "?" : number}
    </Typography>
  );
};

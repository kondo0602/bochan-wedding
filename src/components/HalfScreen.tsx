import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const HalfScreen = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

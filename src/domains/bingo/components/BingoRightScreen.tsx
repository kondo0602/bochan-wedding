import { BingoNumber } from "@/types/BingoNumber";
import { Box, Stack, Typography, Grid } from "@mui/material";
import { BingoHitNumber } from "./BingoHitNumber";

type Props = {
  numbers: BingoNumber[];
};

export const BingoRightScreen = ({ numbers }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h4">これまでに出た数字は...</Typography>
        <Grid container columns={5} rowSpacing={1} sx={{ px: 6 }}>
          {numbers.map((number) => (
            <Grid
              key={number.number.toString()}
              item
              xs={1}
              component="div"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <BingoHitNumber number={number} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

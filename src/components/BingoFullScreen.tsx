import { useBingo } from "@/hooks/useBingo";
import { Box, Typography, Grid } from "@mui/material";
import { HalfScreen } from "./HalfScreen";
import { Counter } from "./HitButton";

export const BingoFullScreen = () => {
  const { numbers, pickedNumber, isRunning, handleStart, handleStop } =
    useBingo();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        background: "white",
      }}
    >
      <HalfScreen>
        <Counter
          isRunning={isRunning}
          handleStart={handleStart}
          handleStop={handleStop}
          pickedNumber={pickedNumber}
        />
      </HalfScreen>
      <HalfScreen>
        <Typography>これまでに出た数字は...</Typography>
        {/* TODO: 15ごとに縦に並んだ方が見やすい */}
        <Grid container columns={5} spacing={1}>
          {numbers.map((number) => (
            <Grid
              component="div"
              item
              xs={1}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography color={number.isHit ? "black" : "lightGray"}>
                {number.number}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </HalfScreen>
    </Box>
  );
};

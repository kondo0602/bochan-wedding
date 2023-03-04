import { useBingo } from "@/hooks/useBingo";
import { Box, Typography, Grid, Stack } from "@mui/material";
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
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${"/images/back.jpeg"})`,
        }}
      >
        <Counter
          isRunning={isRunning}
          handleStart={handleStart}
          handleStop={handleStop}
          pickedNumber={pickedNumber}
        />
      </Box>
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
          <Typography>これまでに出た数字は...</Typography>
          <Grid container columns={5} rowSpacing={1}>
            {numbers.map((number) => (
              <Grid
                component="div"
                item
                xs={1}
                sx={{ display: "flex", justifyContent: "center" }}
                key={number.number.toString()}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: 45,
                    height: 45,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    border: 4,
                    borderRadius: "50%",
                    borderColor: number.isHit ? number.color : "lightGray",
                  }}
                >
                  <Typography
                    color={number.isHit ? "black" : "lightGray"}
                    sx={{ textAlign: "center" }}
                  >
                    {number.number}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

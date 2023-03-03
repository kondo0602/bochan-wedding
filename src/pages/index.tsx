import { HalfScreen } from "@/components/HalfScreen";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Bingo = () => {
  // TODO: ビンゴに関するロジックは別のコンポーネントに切り出す
  const handle = useFullScreenHandle();

  type Number = {
    number: number;
    isHit: boolean;
  };

  const getInitialNumbers = (): Number[] => {
    const numbers: Number[] = [];
    for (let i = 0; i < 75; i++) {
      numbers.push({ number: i + 1, isHit: false });
    }
    return numbers;
  };

  // TODO: useReducerで書き換える
  const [numbers, setNumbers] = useState<Number[]>(getInitialNumbers());
  const [pickedNumber, setPickedNumber] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  const pickUnhitNumber = (): void => {
    const unhitNumbers = numbers.filter((number) => !number.isHit);
    const pickedNumber =
      unhitNumbers[Math.floor(Math.random() * unhitNumbers.length)];
    pickedNumber.isHit = true;
    setNumbers([...numbers]);
    setPickedNumber(pickedNumber.number);
    setRunning(false);
  };

  return (
    <>
      <button onClick={handle.enter}>Enter fullscreen</button>

      <FullScreen handle={handle}>
        {handle.active && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "100vh",
              background: "white",
            }}
          >
            <HalfScreen>
              <Stack spacing={4}>
                <Typography variant="h1">
                  {pickedNumber !== 0 ? pickedNumber : "?"}
                </Typography>
                {running ? (
                  <Button variant="contained" onClick={pickUnhitNumber}>
                    STOP!
                  </Button>
                ) : (
                  <Button variant="contained" onClick={() => setRunning(true)}>
                    START!
                  </Button>
                )}
              </Stack>
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
        )}
      </FullScreen>
    </>
  );
};

export default Bingo;

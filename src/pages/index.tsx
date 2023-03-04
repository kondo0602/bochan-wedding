import { BingoFullScreen } from "@/components/BingoFullScreen";
import { Box, Button } from "@mui/material";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const App = () => {
  const handle = useFullScreenHandle();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={handle.enter}>
          はじめる
        </Button>
      </Box>

      <FullScreen handle={handle}>
        {handle.active && <BingoFullScreen />}
      </FullScreen>
    </>
  );
};

export default App;

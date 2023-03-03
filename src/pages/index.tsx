import { BingoFullScreen } from "@/components/BingoFullScreen";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const App = () => {
  const handle = useFullScreenHandle();

  return (
    <>
      <button onClick={handle.enter}>Enter fullscreen</button>

      <FullScreen handle={handle}>
        {handle.active && <BingoFullScreen />}
      </FullScreen>
    </>
  );
};

export default App;

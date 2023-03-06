import { BingoFullScreen } from "@/domains/bingo/components/BingoFullScreen";
import { BingoNormalScreen } from "@/domains/bingo/components/BingoNormalScreen";
import { useBingo } from "@/domains/bingo/hooks/useBingo";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const App = () => {
  const handle = useFullScreenHandle();

  const {
    numbers,
    pickedNumber,
    isRunning,
    isFinished,
    handleStart,
    handleStop,
  } = useBingo();

  return (
    <>
      <BingoNormalScreen
        numbers={numbers}
        pickedNumber={pickedNumber}
        isRunning={isRunning}
        isFinished={isFinished}
        handleStart={handleStart}
        handleStop={handleStop}
        handleFullScreen={handle.enter}
      />

      <FullScreen handle={handle}>
        {handle.active && (
          <BingoFullScreen
            numbers={numbers}
            pickedNumber={pickedNumber}
            isRunning={isRunning}
            isFinished={isFinished}
            handleStart={handleStart}
            handleStop={handleStop}
          />
        )}
      </FullScreen>
    </>
  );
};

export default App;

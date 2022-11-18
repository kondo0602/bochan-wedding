import { useState } from "react";
import { IsFinishedPresentor } from "./isFinishedPresentor";

export const IsFinishedWithUseState = () => {
  const [isFinished, setIsFinished] = useState(false);

  const handleFinish = () => {
    setIsFinished(true);
  };

  return (
    <IsFinishedPresentor
      title="finish(use-state)"
      isFinished={isFinished}
      handleFinish={handleFinish}
    />
  );
};

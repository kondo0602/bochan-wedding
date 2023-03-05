import useSound from "use-sound";

export const useDrumrollSound = () => {
  const [playDrumroll, { stop: stopDrumroll }] = useSound(
    "/sounds/drumRoll.mp3"
  );

  return { playDrumroll, stopDrumroll };
};

import useSound from "use-sound";

export const useSymbalSound = () => {
  const [playSymbal] = useSound("/sounds/symbal.mp3");

  return playSymbal;
};

import { useRef, useEffect } from "react";

/**
 * 渡されたコールバック関数を、コンポーネントの初期化時に一度だけrequestAnimationFrameで実行するカスタムフック
 * @see: https://css-tricks.com/using-requestanimationframe-with-react-hooks/
 */
export const useAnimationFrame = (callback: () => void): void => {
  // NOTE: useRefを使って、レンダリングごとにrequestAnimationFrameのIDが変わらないようにする
  const requestIdRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const animate = (time: any) => {
    if (previousTimeRef.current != undefined) {
      callback();
    }

    previousTimeRef.current = time;
    requestIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestIdRef.current as number);
  }, []);
};

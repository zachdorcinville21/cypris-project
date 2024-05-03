import { useState, useEffect } from "react";

interface WindowDimensions {
  width: number;
  height: number;
}

export const useWindowSize = (): WindowDimensions => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  });

  return { width, height };
};

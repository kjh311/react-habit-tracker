import { useEffect, useState } from "react";

export default function GetWindowSize({ setMonthsToShow, setWidth }) {
  //   const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      let screenWidth = window.innerWidth;
      setMonthsToShow(screenWidth < 768 ? 2 : 6);
      setWidth(screenWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return null;
}

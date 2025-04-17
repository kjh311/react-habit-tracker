import { useEffect, useContext } from "react";
import { DayThemeContext } from "./App";

const SaveTheme = () => {
  const [dayTheme, setDayTheme] = useContext(DayThemeContext);

  useEffect(() => {
    localStorage.setItem("habitTrackerTheme", dayTheme);
  }, [dayTheme]);

  return null;
};

export default SaveTheme;

import { DayThemeContext } from "./App";
import { useContext } from "react";

const Button = ({ text, type, onClick }) => {
  const [dayTheme, setDayTheme] = useContext(DayThemeContext);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2 m-2 rounded-lg transition-all duration-500 ${
        dayTheme ? "day-button" : "night-button"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;

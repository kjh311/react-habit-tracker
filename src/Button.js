import { DayThemeContext } from "./App";
import { useContext } from "react";

const Button = ({ text, type, onClick }) => {
  const [dayTheme, setDayTheme] = useContext(DayThemeContext);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button p-2 m-2 rounded-lg transition-all duration-500 ${
        dayTheme ? "day-button" : "night-button"
      } ${window.innerWidth >= 768 && "button-hover"}`}
    >
      {text}
    </button>
  );
};

export default Button;

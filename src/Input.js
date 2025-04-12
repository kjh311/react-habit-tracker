import { DayThemeContext } from "./App";
import { useContext } from "react";

const Input = ({ placeholder, onChange, value }) => {
  const [dayTheme, setDayTheme] = useContext(DayThemeContext);

  return (
    <input
      className={`transition-all duration-500 border rounded p-2 m-2 text-center ${
        dayTheme ? "input-day" : "input-night"
      }`}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;

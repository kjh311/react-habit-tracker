import { DayThemeContext } from "./App";
import { useContext } from "react";

const Input = ({ placeholder, onChange, value, maxLength, minLength }) => {
  const [dayTheme, setDayTheme] = useContext(DayThemeContext);

  return (
    <input
      className={`transition-all duration-500 border rounded sm:p-2 sm:m-2 p-0 m-0 text-center ${
        dayTheme ? "input-day" : "input-night"
      }`}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
      minLength={minLength}
    />
  );
};

export default Input;

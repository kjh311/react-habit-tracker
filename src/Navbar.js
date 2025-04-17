import { useContext } from "react";
import { NameContext, DayThemeContext } from "./App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [name, setName] = useContext(NameContext);
  const [dayTheme, setDayTheme] = useContext(DayThemeContext);

  const handleThemeToggle = () => {
    
    setDayTheme(!dayTheme);
  };

  return (
    <div
      className={`navbar sticky top-0 z-50 p-2 text-center transition-colors duration-500 ${
        dayTheme
          ? "dayTheme2 text-black nav-day"
          : "nightTheme2 text-white nav-night"
      }`}
    >
      <button
        onClick={handleThemeToggle}
        className="iconButton "
        style={{ lineHeight: 0 }}
      >
        <FontAwesomeIcon
          icon={dayTheme ? faSun : faMoon}
          className={`text-yellow-400 text-3xl transition-all duration-500 ease-in-out transform ${
            dayTheme
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-180 scale-90 opacity-80"
          }`}
        />
      </button>

      <h1
        className={`text-lg text-bold nav-title `} // Apply the fade-in class conditionally
      >
        {name
          ? `Welcome to Habit Tracker, ${name}!`
          : "Welcome to Habit Tracker!"}
      </h1>
    </div>
  );
}

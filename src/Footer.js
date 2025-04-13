import { useContext } from "react";
import { DayThemeContext } from "./App";

const Footer = () => {
  const [dayTheme, setDayTheme] = useContext(DayThemeContext);

  return (
    <div
      className={`p-4 text-center transition-colors duration-500 ${
        dayTheme
          ? "dayTheme2 text-black footer-day"
          : "nightTheme2 text-white footer-night"
      }`}
    >
      Copywrite © {new Date().getFullYear()}{" "}
      <a
        className="link"
        href="https://kjh311.github.io/new_portfolio/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Kevin Huelsmann
      </a>
    </div>
  );
};

export default Footer;

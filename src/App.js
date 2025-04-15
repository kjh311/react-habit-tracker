import "./App.scss";
import React, { useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HabitTracker from "./HabitTracker";

export const NameContext = React.createContext();
export const DayThemeContext = React.createContext();

function App() {
  // console.log("Environment:", process.env.NODE_ENV);
  const [name, setName] = useState("");
  const [dayTheme, setDayTheme] = useState(true);

  return (
    <NameContext.Provider value={[name, setName]}>
      <DayThemeContext.Provider value={[dayTheme, setDayTheme]}>
        <div
          className={`App fade-in ${
            dayTheme ? "dayTheme4" : "nightTheme3"
          } transition-colors duration-500`}
        >
          <Navbar />
          <HabitTracker />
          <Footer />
        </div>
      </DayThemeContext.Provider>
    </NameContext.Provider>
  );
}

export default App;

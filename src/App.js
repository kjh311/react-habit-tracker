import "./App.scss";
import React, { useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HabitTracker from "./HabitTracker";

export const NameContext = React.createContext();
export const DayThemeContext = React.createContext();

function Home() {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <p>React Habit Tracker</p>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
}

function App() {
  console.log("Environment:", process.env.NODE_ENV);
  const [name, setName] = useState("");
  const [dayTheme, setDayTheme] = useState(true);

  return (
    <NameContext.Provider value={[name, setName]}>
      <DayThemeContext.Provider value={[dayTheme, setDayTheme]}>
        <div
          className={`App ${
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

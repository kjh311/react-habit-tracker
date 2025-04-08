import "./App.css";
import React, { useContext, useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import HabitTracker from "./HabitTracker";

export const NameContext = React.createContext();

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

  return (
    <div className="App">
      <NameContext.Provider value={[name, setName]}>
        <Navbar />
        <HabitTracker />
        {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </NameContext.Provider>
    </div>
  );
}

export default App;

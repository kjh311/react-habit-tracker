import "./App.css";
import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import HabitTracker from "./HabitTracker";

function Home() {
  // console.log("Environment:", process.env.NODE_ENV);

  return (
    <div>
      {/* <h1>Home</h1> */}
      <p>React Habit Tracker</p>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <HabitTracker />
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;

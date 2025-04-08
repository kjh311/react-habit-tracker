import { useState, useContext } from "react";
import { NameContext } from "./App";

export default function Navbar() {
  const [name, setName] = useContext(NameContext);

  return (
    <div className="nav p-2 bg-blue-400">
      <h1 className="text-lg text-bold">
        {name
          ? `Welcome to Habit Tracker, ${name}!`
          : "Welcom to Habit Tracker!"}
      </h1>
    </div>
  );
}

import { useState, useContext } from "react";
import { NameContext } from "./App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [name, setName] = useContext(NameContext);

  return (
    <div className="nav p-2 bg-blue-400 text-center">
      <FontAwesomeIcon
        icon={faSun}
        className="float-left sunIcon text-yellow-400"
      />
      <h1 className="text-lg text-bold">
        {name
          ? `Welcome to Habit Tracker, ${name}!`
          : "Welcom to Habit Tracker!"}
      </h1>
    </div>
  );
}

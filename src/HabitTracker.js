import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import { NameContext } from "./App";

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [habitInput, setHabitInput] = useState("");
  const [name, setName] = useContext(NameContext);
  //   const [name, setName] = useState("");
  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    // Get name
    const storedUserName = localStorage.getItem("habitTrackerUserName");
    if (storedUserName) {
      setName(storedUserName);
    }

    // Get habbits
    const storedHabits = localStorage.getItem("habitTrackerHabits");
    if (storedHabits) {
      setHabits(JSON.parse(storedHabits));
    }

    // localStorage.removeItem("habitTrackerHabits");
    // localStorage.removeItem("habitTrackerUserName");

    console.log("Habits", habits);
  }, []);

  //ADD USER NAME
  const handleAddName = (e) => {
    e.preventDefault();

    if (!nameInput.trim()) return;

    localStorage.setItem("habitTrackerUserName", nameInput);
    setName(nameInput);
    setNameInput("");
  };

  //ADD HABIT
  const handleAddHabit = (e) => {
    e.preventDefault();

    if (!habitInput.trim()) return;

    const newHabit = {
      id: Date.now(),
      name: habitInput.trim(),
    };

    localStorage.setItem(
      "habitTrackerHabits",
      JSON.stringify([...habits, newHabit])
    );
    setHabits((prev) => [...prev, newHabit]);

    setHabitInput("");
  };

  return (
    <div>
      <div>
        {!name && (
          <div className="card">
            <p>
              {/* Welcome to Habit Tracker. <br /> */}
              Please enter your name to get started:
            </p>
            <form
              className="border border-black rounded-lg p-2 m-2 "
              onSubmit={handleAddName}
            >
              <input
                className="border rounded p-2 m-2"
                type="text"
                value={nameInput}
                placeholder="Enter your name:"
                onChange={(e) => setNameInput(e.target.value)}
              />
              <br />
              <button className="p-2 m-2 bg-blue-400 hover:bg-blue-600 border border-black rounded-lg">
                Submit Name
              </button>
            </form>
          </div>
        )}
      </div>

      {/* add habit */}

      <form className="card" onSubmit={handleAddHabit}>
        <input
          type="text"
          className="border rounded-lg p-2 m-2"
          value={habitInput}
          placeholder="Enter a new habit:"
          onChange={(e) => setHabitInput(e.target.value)}
        />
        <br />
        <button
          className="p-2 m-2 border rounded-lg bg-blue-400 hover:bg-blue-700 hover:text-white"
          type="submit"
        >
          Add Habit
        </button>
      </form>

      {/* show habits */}
      <div className="card">
        {habits.length > 0
          ? habits.map((habit, id) => (
              <div key={id}>
                {habit.name}, ID: {habit.id}
              </div>
            ))
          : "No Habits"}
      </div>
    </div>
  );
}

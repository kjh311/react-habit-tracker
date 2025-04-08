import { useState, useEffect } from "react";
import axios from "axios";
import ReactCalendarHeatmap from "react-calendar-heatmap";

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [name, setName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [newHabit, setNewHabit] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("habitTrackerUserName");
    if (storedUserName) {
      setName(storedUserName);
    }
  }, []);

  //ADD USER NAME
  const handleAddName = (e) => {
    e.preventDefault();

    if (!nameInput.trim()) return;

    localStorage.setItem("habitTrackerUserName", nameInput);
    setName(nameInput);
    setNameInput("");
  };

  return (
    <div>
      <h2>Habit Tracker</h2>

      <div>
        {name ? (
          `Welcome,   ${name}!`
        ) : (
          <div>
            <p>
              `Welcome to Habit Tracker. Please enter your name to get started:`
            </p>
            <form className="border rounded p-2 m-2" onSubmit={handleAddName}>
              <input
                className="border rounded p-2 m-2"
                type="text"
                value={nameInput}
                placeholder="Enter your name:"
                onChange={(e) => setNameInput(e.target.value)}
              />
              <br />
              <button className="p-2 m-2 bg-blue-400 hover:bg-blue-600">
                Submit Name
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

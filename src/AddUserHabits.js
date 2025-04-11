import { useState } from "react";

export default function AddUserHabits({ habits, setHabits, loading }) {
  const [habitInput, setHabitInput] = useState("");

  const handleAddHabit = (e) => {
    e.preventDefault();

    if (!habitInput.trim()) return;

    const newHabit = {
      id: Date.now(),
      name: habitInput.trim().toUpperCase(),
      calendar: [],
    };

    const updatedHabits = [...habits, newHabit];

    localStorage.setItem("habitTrackerHabits", JSON.stringify(updatedHabits));
    setHabits(updatedHabits);

    setHabitInput("");
  };

  return (
    <div>
      {!loading ? (
        <form className="card text-center" onSubmit={handleAddHabit}>
          <input
            type="text"
            className="border rounded-lg p-2 m-2 text-center"
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
      ) : (
        "LOADING..."
      )}
    </div>
  );
}

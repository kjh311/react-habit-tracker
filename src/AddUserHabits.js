import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

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
          {habits.length === 0 && (
            <p className="text-center">
              Great! Now let's enter your first habit to get started:
            </p>
          )}
          <Input
            placeholder={"Enter a new habit:"}
            value={habitInput}
            onChange={(e) => setHabitInput(e.target.value)}
          />
          <br />
          {/* <button
            className="p-2 m-2 border rounded-lg bg-blue-400 hover:bg-blue-700 hover:text-white transition-colors duration-300"
            type="submit"
          >
            Add Habit
          </button> */}
          <Button type={"submit"} text={"Add Habit"} />
        </form>
      ) : (
        <div className="text-center">"LOADING..."</div>
      )}
    </div>
  );
}

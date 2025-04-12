import { useState, useContext } from "react";
import { DayThemeContext } from "./App";
import Button from "./Button";
import Input from "./Input";

export default function AddUserHabits({ habits, setHabits, loading }) {
  const [habitInput, setHabitInput] = useState("");
  const [dayTheme, setDayTheme] = useContext(DayThemeContext);

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
    <div
      className={`text-center card transition-all duration-500 ${
        dayTheme
          ? "dayTheme2 text-black dayCard"
          : "nightTheme5 text-white nightCard"
      }`}
    >
      {!loading ? (
        <form
          onSubmit={handleAddHabit}
          className={`border transition-all duration-500 ${
            dayTheme ? "dayTheme3 text-black" : "nightTheme2 text-white"
          } rounded-lg p-2 m-2`}
        >
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
          <Button type={"submit"} text={"Add Habit"} />
        </form>
      ) : (
        <div className="text-center">"LOADING..."</div>
      )}
    </div>
  );
}

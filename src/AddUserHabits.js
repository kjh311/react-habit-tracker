import { useState, useContext, useEffect } from "react";
import { DayThemeContext } from "./App";
import Button from "./Button";
import Input from "./Input";

export default function AddUserHabits({
  habits,
  setHabits,
  loading,
  //   setNewHabitId,
}) {
  const [habitInput, setHabitInput] = useState("");
  const [dayTheme] = useContext(DayThemeContext);
  const [habitAdded, setHabitAdded] = useState(false);
  const [habitLength, setHabitLength] = useState(0);

  useEffect(() => {
    setHabitLength(habitInput.length);
  }, [habitInput]);

  const handleAddHabit = (e) => {
    e.preventDefault();

    if (!habitInput.trim()) return;

    const newHabit = {
      id: Date.now(),
      name: habitInput.trim().toUpperCase(),
      calendar: [],
    };

    const updatedHabits = [newHabit, ...habits];

    localStorage.setItem("habitTrackerHabits", JSON.stringify(updatedHabits));
    setHabits(updatedHabits);
    // setNewHabitId(newHabit.id);
    setHabitInput("");
    setHabitAdded(true);

    setTimeout(() => setHabitAdded(false), 2000);
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
            <>
              <h1 className="text-xl">GREAT!!</h1>
              <p className="text-center">
                Now let's enter your first habit to get started:
              </p>
            </>
          )}
          <Input
            placeholder={"Enter a new habit:"}
            value={habitInput}
            onChange={(e) => setHabitInput(e.target.value)}
            maxLength={20}
            minLength={1}
          />
          <br />
          {habitLength === 20 && (
            <div
              className={`max-length transition-all duration-500 ${
                dayTheme ? "text-red-500" : "text-white"
              }`}
            >
              20 Characters max!
            </div>
          )}
          <Button type={"submit"} text={"Add Habit"} />
        </form>
      ) : (
        <div className="text-center">"LOADING..."</div>
      )}

      {habitAdded && (
        <div
          className={`floating-message ${
            dayTheme ? "floating-message-day" : "floating-message-night"
          }`}
        >
          Habit Added!
        </div>
      )}
    </div>
  );
}

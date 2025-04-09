import { useState, useContext } from "react";
import { NameContext } from "./App";
import AddUserName from "./AddUserName";
import AddUserHabits from "./AddUserHabits";
import ShowHabits from "./ShowHabits";
import GetInfo from "./GetInfo";

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [name, setName] = useContext(NameContext);

  return (
    <div>
      <GetInfo habits={habits} setHabits={setHabits} setName={setName} />

      <AddUserName />

      <AddUserHabits habits={habits} setHabits={setHabits} />

      <ShowHabits habits={habits} />
    </div>
  );
}

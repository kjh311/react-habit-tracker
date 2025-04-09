import { useState, useContext } from "react";
import { NameContext } from "./App";
import AddUserName from "./AddUserName";
import AddUserHabits from "./AddUserHabits";
import ShowHabits from "./ShowHabits";
import GetInfo from "./GetInfo";

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [name, setName] = useContext(NameContext);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <GetInfo
        habits={habits}
        setHabits={setHabits}
        setName={setName}
        setLoading={setLoading}
      />

      <AddUserName loading={loading} />

      <AddUserHabits habits={habits} setHabits={setHabits} loading={loading} />

      <ShowHabits habits={habits} loading={loading} setHabits={setHabits} />
    </div>
  );
}

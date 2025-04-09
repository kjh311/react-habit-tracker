// import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const DeleteHabit = ({ id, habits, setHabits }) => {
  const deleteHabit = (id) => {
    if (window.confirm("Delete this habit?")) {
      const updatedHabits = habits.filter((habit) => habit.id !== id);
      setHabits(updatedHabits);
      localStorage.setItem("habitTrackerHabits", JSON.stringify(updatedHabits));
      // localStorage.removeItem("habitTrackerHabits", habitTrackerHabits(id))
      // setHabits((prev) => prev.filter((habit) => habit.id !== id))
    }
  };
  return (
    <IconButton
      className=" float-right"
      aria-label="close"
      onClick={() => deleteHabit(id)}
    >
      <CloseIcon fontSize="large" style={{ color: "red" }} />
    </IconButton>
  );
};

export default DeleteHabit;

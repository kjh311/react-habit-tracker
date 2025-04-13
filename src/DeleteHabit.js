// import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const DeleteHabit = ({ id, habits, setHabits, onDeleteStart }) => {
  const deleteHabit = (id) => {
    if (window.confirm("Delete this habit?")) {
      onDeleteStart?.(); // trigger animation
      setTimeout(() => {
        const updatedHabits = habits.filter((habit) => habit.id !== id);
        setHabits(updatedHabits);
        localStorage.setItem(
          "habitTrackerHabits",
          JSON.stringify(updatedHabits)
        );
      }, 500); // wait for animation to finish
    }
  };

  return (
    <IconButton
      className="deleteHabit"
      aria-label="close"
      onClick={() => deleteHabit(id)}
    >
      <CloseIcon fontSize="large" style={{ color: "red" }} />
    </IconButton>
  );
};

export default DeleteHabit;

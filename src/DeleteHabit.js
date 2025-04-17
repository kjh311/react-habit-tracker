import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { DayThemeContext } from "./App";

const DeleteHabit = ({ id, habits, setHabits, onDeleteStart }) => {
  const [dayTheme, setDayTheme] = useContext(DayThemeContext);

  const deleteHabit = (id) => {
    if (window.confirm("Delete this habit?")) {
      onDeleteStart?.();
      setTimeout(() => {
        const updatedHabits = habits.filter((habit) => habit.id !== id);
        setHabits(updatedHabits);
        localStorage.setItem(
          "habitTrackerHabits",
          JSON.stringify(updatedHabits)
        );
      }, 500);
    }
    if (habits.length === 0) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <IconButton
      className={`deleteHabit transition-colors duration-500 ease-in-out ${
        dayTheme ? "deleteHabit-day" : "deleteHabit-night"
      } ${window.innerWidth >= 768 && "deleteHabit-hover"}`}
      aria-label="close"
      onClick={() => deleteHabit(id)}
    >
      <CloseIcon
        fontSize="large"
        className={`icon transition-colors duration-500 ease-in-out ${
          dayTheme ? "icon-day" : "icon-night"
        }`}
      />
    </IconButton>
  );
};

export default DeleteHabit;

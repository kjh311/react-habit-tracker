import axios from "axios";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import DeleteHabit from "./DeleteHabit";

const ShowHabits = ({ habits, loading, setHabits }) => {
  return (
    <>
      {!loading && (
        <div className="card">
          {habits.length > 0
            ? habits.map((habit, id) => (
                <div key={id}>
                  <DeleteHabit
                    id={habit.id}
                    habits={habits}
                    setHabits={setHabits}
                  />
                  {habit.name}, ID: {habit.id}
                </div>
              ))
            : "No Habits"}
        </div>
      )}
    </>
  );
};

export default ShowHabits;

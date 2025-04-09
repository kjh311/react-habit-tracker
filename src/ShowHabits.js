import axios from "axios";
import ReactCalendarHeatmap from "react-calendar-heatmap";

const ShowHabits = ({ habits, loading }) => {
  return (
    <>
      {!loading && (
        <div className="card">
          {habits.length > 0
            ? habits.map((habit, id) => (
                <div key={id}>
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

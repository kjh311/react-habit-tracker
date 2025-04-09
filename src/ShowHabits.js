import ReactCalendarHeatmap from "react-calendar-heatmap";
import DeleteHabit from "./DeleteHabit";

const ShowHabits = ({ habits, loading, setHabits }) => {
  return (
    <>
      {!loading && (
        <div>
          {habits.length > 0
            ? habits.map((habit, id) => (
                <div key={id} className="card">
                  <DeleteHabit
                    id={habit.id}
                    habits={habits}
                    setHabits={setHabits}
                  />
                  Name: {habit.name} <br />
                  id: {habit.id}
                </div>
              ))
            : ""}
        </div>
      )}
    </>
  );
};

export default ShowHabits;

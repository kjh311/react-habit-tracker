import ReactCalendarHeatmap from "react-calendar-heatmap";
import DeleteHabit from "./DeleteHabit";
import "react-calendar-heatmap/dist/styles.css";
import "./heatmap-custom.css";

const ShowHabits = ({ habits, loading, setHabits }) => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in 'YYYY-MM-DD' format

  // Handle marking a habit as completed for today
  const markAsCompleted = (habitId) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === habitId) {
        const todayEntry = habit.calendar.find((entry) => entry.date === today);

        if (todayEntry) {
          // Increment the count if an entry exists for today
          todayEntry.count += 1;
        } else {
          // Add a new entry for today with count 1
          habit.calendar.push({
            date: today,
            count: 1,
          });
        }
      }
      return habit;
    });

    // Save the updated habits to localStorage and update the state
    localStorage.setItem("habitTrackerHabits", JSON.stringify(updatedHabits));
    setHabits(updatedHabits);
  };

  return (
    <>
      {!loading && (
        <div>
          {habits.length > 0 &&
            habits.map((habit, id) => (
              <div key={id} className="card">
                <DeleteHabit
                  id={habit.id}
                  habits={habits}
                  setHabits={setHabits}
                />
                <div className="font-bold">{habit.name}</div>
                <div className="text-sm text-gray-600">ID: {habit.id}</div>

                {/* Render the calendar heatmap */}
                <ReactCalendarHeatmap
                  startDate={
                    new Date(today.split("-")[0], new Date().getMonth() - 11, 1)
                  }
                  endDate={new Date(today)}
                  values={habit.calendar || []}
                  classForValue={(value) =>
                    !value
                      ? "color-empty"
                      : `color-scale-${Math.min(value.count, 4)} border-square`
                  }
                />
                <br />
                <ul className="inline ">
                  <li className="less">Less</li>
                  <li className="square color-square-empty"></li>
                  <li className="square color-square-1"></li>
                  <li className="square color-square-2"></li>
                  <li className="square color-square-3"></li>
                  <li className="square color-square-4"></li>
                  <li>More</li>
                </ul>

                <br />
                {/* Button to mark the habit as completed for today */}
                <div>
                  <button
                    className="p-2 m-2 border rounded-lg bg-green-400 hover:bg-green-700 hover:text-white"
                    onClick={() => markAsCompleted(habit.id)}
                  >
                    Mark as Completed Today
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default ShowHabits;

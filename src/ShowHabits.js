import ReactCalendarHeatmap from "react-calendar-heatmap";
import DeleteHabit from "./DeleteHabit";
import "react-calendar-heatmap/dist/styles.css";
import "./heatmap-custom.css";
import MarkAsCompleted from "./MarkAsCompleted";
import StreakCounter from "./StreakCounter";

import { useEffect } from "react";

const ShowHabits = ({ habits, loading, setHabits }) => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in 'YYYY-MM-DD' format

  //get current time
  useEffect(() => {
    var currentdate = new Date();
    var datetime =
      "Last Sync: " +
      currentdate.getDay() +
      "/" +
      currentdate.getMonth() +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    console.log(datetime);
  }, []);

  return (
    <>
      {!loading && (
        <div>
          {habits.length > 0 &&
            habits.map((habit, id) => (
              <div key={id} className="card relative">
                <DeleteHabit
                  id={habit.id}
                  habits={habits}
                  setHabits={setHabits}
                />
                <div className="mx-auto text-center object-center relative">
                  <div className="habitName font-bold text-xl ">
                    {habit.name}
                  </div>
                  {/* <div className="text-sm text-gray-600">ID: {habit.id}</div> */}

                  <StreakCounter habit={habit} />
                </div>

                {/* Render the calendar heatmap */}
                <ReactCalendarHeatmap
                  startDate={
                    new Date(today.split("-")[0], new Date().getMonth() - 6, 1)
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
                <ul className="inlineUL pt-4 text-right">
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
                <MarkAsCompleted
                  habit={habit}
                  setHabits={setHabits}
                  today={today}
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default ShowHabits;

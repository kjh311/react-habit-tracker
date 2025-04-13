import { useState, useContext, useEffect } from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import DeleteHabit from "./DeleteHabit";
import "react-calendar-heatmap/dist/styles.css";
import "./heatmap-custom.css";
import MarkAsCompleted from "./MarkAsCompleted";
import StreakCounter from "./StreakCounter";
import GetWindowSize from "./GetWindowSize";
import { DayThemeContext } from "./App";

const ShowHabits = ({ habits, loading, setHabits }) => {
  const [deletingHabitId, setDeletingHabitId] = useState(null);
  const [pulseHabitId, setPulseHabitId] = useState(null);

  const [dayTheme] = useContext(DayThemeContext);
  const [monthsToShow, setMonthsToShow] = useState(6);
  const [width, setWidth] = useState(window.innerWidth);

  const todayDate = new Date();
  const today = todayDate.toISOString().split("T")[0];
  const startDate = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth() - monthsToShow,
    1
  );

  useEffect(() => {
    const currentdate = new Date();
    const datetime =
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
    <div className="show-habits">
      <GetWindowSize setMonthsToShow={setMonthsToShow} setWidth={setWidth} />

      {!loading && habits.length > 0 ? (
        <div
          className={`text-center card transition-all duration-500 ${
            dayTheme
              ? "dayTheme2 text-black dayCard"
              : "nightTheme5 text-white nightCard"
          }`}
        >
          {habits.map((habit, id) => (
            <div
              key={id}
              className={`relative border transition-all duration-500 ${
                dayTheme ? "dayTheme3 text-black" : "nightTheme2 text-white"
              } rounded-lg p-2 m-2 ${
                deletingHabitId === habit.id ? "habit-fade-out" : ""
              }`}
            >
              <DeleteHabit
                id={habit.id}
                habits={habits}
                setHabits={setHabits}
                onDeleteStart={() => setDeletingHabitId(habit.id)}
              />

              <div className="mx-auto text-center object-center relative">
                <div className="habit-name font-bold text-xl">{habit.name}</div>

                <StreakCounter
                  habit={habit}
                  pulse={pulseHabitId === habit.id}
                />
              </div>

              <ReactCalendarHeatmap
                startDate={startDate}
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

              <MarkAsCompleted
                habit={habit}
                setHabits={setHabits}
                today={today}
                setPulseHabitId={setPulseHabitId}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ShowHabits;

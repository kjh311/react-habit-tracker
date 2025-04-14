import { useState, useContext, useEffect } from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import DeleteHabit from "./DeleteHabit";
import "react-calendar-heatmap/dist/styles.css";
import "./heatmap-custom.css";
import MarkAsCompleted from "./MarkAsCompleted";
import StreakCounter from "./StreakCounter";
import GetWindowSize from "./GetWindowSize";
import { DayThemeContext } from "./App";
import { AnimatePresence, motion } from "framer-motion";

const ShowHabits = ({ habits, loading, setHabits, newHabitId }) => {
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
    if (newHabitId) {
      const timer = setTimeout(() => setPulseHabitId(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [newHabitId]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const monthLabels = document.getElementsByClassName(
        "react-calendar-heatmap-month-label"
      );

      for (let i = 0; i < monthLabels.length; i++) {
        if (dayTheme) {
          monthLabels[i].classList.add("month-label-day");
          monthLabels[i].classList.remove("month-label-night");
        } else {
          monthLabels[i].classList.add("month-label-night");
          monthLabels[i].classList.remove("month-label-day");
        }
      }
    }, 100); // Adjust delay as needed

    return () => clearTimeout(timeout);
  }, [dayTheme]);

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
          <AnimatePresence>
            {habits.map((habit) => (
              <motion.div
                key={habit.id}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`relative border transition-all duration-500 ${
                  dayTheme ? "dayTheme3 text-black" : "nightTheme2 text-white"
                } rounded-lg p-2 m-2 ${
                  deletingHabitId === habit.id
                    ? "habit-fade-out"
                    : newHabitId === habit.id
                    ? "habit-fade-in"
                    : ""
                }`}
              >
                <DeleteHabit
                  id={habit.id}
                  habits={habits}
                  setHabits={setHabits}
                  onDeleteStart={() => setDeletingHabitId(habit.id)}
                />
                <div className="mx-auto text-center object-center relative">
                  <div className="habit-name font-bold text-xl">
                    {habit.name}
                  </div>

                  <StreakCounter
                    habit={habit}
                    pulse={pulseHabitId === habit.id}
                  />
                </div>
                {/* {console.log("Calendar", habit.calendar)} */}
                <ReactCalendarHeatmap
                  startDate={startDate}
                  endDate={new Date(today)}
                  values={habit.calendar || []}
                  classForValue={(value) => {
                    const count = value ? value.count : 0;
                    return !value
                      ? "color-empty"
                      : `color-scale-${Math.min(count, 10)} border-square`;
                  }}
                  renderCustomCell={(value) => {
                    return (
                      <div
                        className={`react-calendar-heatmap-cell ${
                          value
                            ? `color-scale-${Math.min(value.count, 4)}`
                            : "color-empty"
                        }`}
                        data-tooltip={`Count for ${
                          value?.date || "No count"
                        }: ${value?.count || "0"}`}
                      />
                    );
                  }}
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : null}
    </div>
  );
};

export default ShowHabits;

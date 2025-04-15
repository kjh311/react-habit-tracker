import { useEffect, useState, useContext } from "react";
import { DayThemeContext } from "./App";
// import { motion } from "framer-motion";

export default function StreakCounter({ habit, pulse }) {
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [dayTheme] = useContext(DayThemeContext);
  // const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    if (!habit?.calendar || habit.calendar.length === 0) return;

    const today = new Date();

    const activeDates = habit.calendar
      .filter((entry) => entry.count > 0)
      .map((entry) => entry.date)
      .sort();

    const habitTotalCount = habit.calendar.reduce((acc, item) => {
      return acc + item.count;
    }, 0);

    setTotalCount(habitTotalCount);

    const calendarSet = new Set(activeDates);

    // ✅ Current streak
    let streakCount = 0;
    for (let i = 0; ; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(today.getDate() - i);
      const dateStr = checkDate.toISOString().split("T")[0];

      if (calendarSet.has(dateStr)) {
        streakCount++;
      } else {
        break;
      }
    }

    setCurrentStreak(streakCount);

    // ✅ Longest streak
    let maxStreak = 0;
    let tempStreak = 1;

    for (let i = 1; i < activeDates.length; i++) {
      const prevDate = new Date(activeDates[i - 1]);
      const currDate = new Date(activeDates[i]);
      const diff = (currDate - prevDate) / (1000 * 3600 * 24);

      if (diff === 1) {
        tempStreak++;
        maxStreak = Math.max(maxStreak, tempStreak);
      } else {
        tempStreak = 1;
      }
    }

    setLongestStreak(Math.max(maxStreak, 1));
  }, [habit]);

  // ✅ only pulse when `pulse` prop is true
  // useEffect(() => {
  //   if (pulse) {
  //     setIsPulsing(true);
  //     const timer = setTimeout(() => setIsPulsing(false), 300);
  //     return () => clearTimeout(timer);
  //   }
  // }, [pulse]);

  return (
    <div className="font-semibold mt-2 ">
      <div
        className={`my-4 ${
          window.innerWidth >= 768 ? "columns-3" : "columns-1"
        }`}
      >
        <div
          className={`streak-text w-full sm:w-auto transition-all duration-500 ${
            dayTheme ? "day-text" : "night-text"
          }`}
        >
          🔥 Current Streak: {currentStreak} day
          {currentStreak !== 1 ? "s" : ""}
        </div>
        <div
          className={`streak-text w-full sm:w-auto transition-all duration-500 ${
            dayTheme ? "day-text" : "night-text"
          }`}
        >
          🏆 Longest Streak: {longestStreak} day{longestStreak !== 1 ? "s" : ""}
        </div>
        <div
          className={`streak-text w-full sm:w-auto transition-all duration-500 ${
            dayTheme ? "day-text" : "night-text"
          }`}
        >
          ⭐ Total Points: {totalCount}
        </div>
      </div>
    </div>
  );
}

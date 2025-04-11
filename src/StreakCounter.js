import { useEffect, useState } from "react";

export default function StreakCounter({ habit }) {
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  useEffect(() => {
    if (!habit?.calendar || habit.calendar.length === 0) return;

    const today = new Date();

    // Convert the calendar into a Set of active dates
    const activeDates = habit.calendar
      .filter((entry) => entry.count > 0)
      .map((entry) => entry.date)
      .sort(); // sort for longest streak calc

    const calendarSet = new Set(activeDates);

    // ✅ Calculate current streak
    let streakCount = 0;
    for (let i = 0; ; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(today.getDate() - i);
      const dateStr = checkDate.toISOString().split("T")[0];

      if (calendarSet.has(dateStr)) {
        streakCount++;
      } else {
        break; // streak broken
      }
    }

    setCurrentStreak(streakCount);

    // ✅ Calculate longest streak
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

    setLongestStreak(Math.max(maxStreak, 1)); // at least 1
  }, [habit]);

  return (
    <div className="text-sm text-center font-semibold mt-2">
      {currentStreak > 0 && (
        <div className="text-green-600">
          🔥 Current Streak: {currentStreak} day{currentStreak !== 1 ? "s" : ""}
        </div>
      )}
      {longestStreak > 0 && (
        <div className="text-blue-600">
          🏆 Longest Streak: {longestStreak} day{longestStreak !== 1 ? "s" : ""}
        </div>
      )}
    </div>
  );
}

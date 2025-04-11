import { useEffect, useState } from "react";

export default function StreakCounter({ habit }) {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (!habit?.calendar || habit.calendar.length === 0) return;

    const today = new Date();
    let streakCount = 0;

    // Convert the calendar into a Map for fast date lookup
    const calendarMap = new Map(
      habit.calendar.map((entry) => [entry.date, entry.count])
    );

    // Check each previous day starting from today
    for (let i = 0; ; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(today.getDate() - i);
      const dateStr = checkDate.toISOString().split("T")[0];

      const count = calendarMap.get(dateStr);

      if (count && count > 0) {
        streakCount++;
      } else {
        break; // end the streak
      }
    }

    setStreak(streakCount);
  }, [habit]);

  return (
    <div className="text-sm text-green-600 font-semibold mt-2 text-center">
      🔥 Current Streak: {streak} day{streak !== 1 ? "s" : ""}
    </div>
  );
}

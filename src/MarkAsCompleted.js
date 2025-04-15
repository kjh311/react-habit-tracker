import Button from "./Button";
export default function MarkAsCompleted({
  habit,
  setHabits,
  today,
  setPulseHabitId,
}) {
  const markAsCompleted = () => {
    const updatedHabits =
      JSON.parse(localStorage.getItem("habitTrackerHabits")) || [];

    const updated = updatedHabits.map((h) => {
      if (h.id === habit.id) {
        if (!h.calendar) h.calendar = [];

        const todayEntry = h.calendar.find((entry) => entry.date === today);
        if (todayEntry) {
          todayEntry.count += 1;
        } else {
          h.calendar.push({ date: today, count: 1 });
        }
      }
      return h;
    });

    localStorage.setItem("habitTrackerHabits", JSON.stringify(updated));
    setHabits(updated);

    setPulseHabitId(habit.id); // trigger pulse
    setTimeout(() => setPulseHabitId(null), 400); // remove pulse after short delay
  };

  return (
    <div className="text-center">
      <Button onClick={markAsCompleted} text={"+1 Point for Today"} />
    </div>
  );
}

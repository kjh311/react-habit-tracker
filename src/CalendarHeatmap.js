import { useState, useContext } from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import { HoverContext, ToolTipContext } from "./ShowHabits";

const CalendarHeatmap = ({ habit, startDate, today }) => {
  const [toolTipText, setToolTipText] = useContext(ToolTipContext);
  const [hover, setHover] = useContext(HoverContext);

  const handleMouseOver = (value) => {
    // Log the date and count when mouseover happens
    setHover(true);
    if (value && value.date) {
      console.log(`Date: ${value.date}, Points: ${value.count}`);
      setToolTipText(`Date: ${value.date}, Points: ${value.count}`);
    } else {
      console.log("no data");
      setToolTipText("No Data");
    }
  };

  return (
    <div>
      {" "}
      <ReactCalendarHeatmap
        className="calendar-heatmap"
        startDate={startDate}
        endDate={new Date(today)}
        values={habit.calendar || []}
        classForValue={(value) => {
          const count = value ? value.count : 0;
          return !value ? "color-empty" : `color-scale-${Math.min(count, 4)}`;
        }}
        showWeekdayLabels={false}
        onMouseOver={(e, value) => {
          handleMouseOver(value);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      />
    </div>
  );
};

export default CalendarHeatmap;

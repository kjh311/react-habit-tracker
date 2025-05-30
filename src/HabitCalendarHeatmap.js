// HabitCalendarHeatmap.js
import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";
import GetWindowSize from "./GetWindowSize";
import "react-calendar-heatmap/dist/styles.css";
import "./heatmap-custom.css";

const HabitCalendarHeatmap = ({
  habit,
  endDate,
  dayTheme,
  startDate,
  setMonthsToShow,
  habits,
}) => {
  const [width, setWidth] = useState(window.innerWidth);

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
    }, 100);

    return () => clearTimeout(timeout);
  }, [dayTheme, width, habits]);

  return (
    <>
      <GetWindowSize setMonthsToShow={setMonthsToShow} setWidth={setWidth} />

      <CalendarHeatmap
        className="calendar-heatmap"
        startDate={startDate}
        endDate={endDate}
        values={(habit.calendar || []).filter(
          (v) => v?.date && !isNaN(new Date(v.date).getTime())
        )}
        classForValue={(value) => {
          const count = value ? value.count : 0;
          return !value ? "color-empty" : `color-scale-${Math.min(count, 4)}`;
        }}
        tooltipDataAttrs={(value) => {
          const dateStr =
            value && value.date
              ? new Date(value.date + "T12:00:00").toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "";
          return {
            "data-tip": `${dateStr} Points: ${value?.count ?? 0}`,
          };
        }}
        showWeekdayLabels={false}
      />
      <ReactTooltip />
    </>
  );
};

export default HabitCalendarHeatmap;

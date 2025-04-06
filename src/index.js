import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./timelineItems.js";
import { assignLanes, getMonths, getYears } from "./assignLanes.js";
import { MonthSelector, DaysSubHeader, Lanes } from "./components/index.js";

function App() {
  const months = getMonths(timelineItems);
  const years = getYears(timelineItems);

  const [lanes, setLanes] = useState([]);
  const [days, setDays] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(0);

  useEffect(() => {
    const monthData = months[selectedMonth || 0];
    if (!monthData) return;
    const { id, totalDaysInMonth, year } = monthData;

    const updateDays = () => {
      setDays(Array.from({ length: totalDaysInMonth }, (_, i) => i + 1));
    };

    const updateLanes = () => {
      setLanes(assignLanes(timelineItems, id, year));
    };

    updateDays();
    updateLanes();
  }, [selectedMonth]);

  return (
    <div className="flex flex-col max-w-screen-lg mx-auto gap-4 p-8">
      <MonthSelector
        months={months}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <DaysSubHeader days={days} />
      <Lanes
        lanes={lanes}
        days={days.length}
        selectedMonth={selectedMonth}
        months={months}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

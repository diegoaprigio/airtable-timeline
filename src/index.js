import React from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./timelineItems.js";
import { assignLanes, getMonths, getYears } from "./assignLanes.js";

function App() {
  const months = getMonths(timelineItems);
  const years = getYears(timelineItems);

  const items = assignLanes(timelineItems, 0, 2021);
  console.log("Timeline items with lanes:", items);

  return (
    <div>
      <h2>Good luck with your assignment! {"\u2728"}</h2>
      <h3>{timelineItems.length} timeline items to render</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

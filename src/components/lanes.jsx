import { Lane } from "./index.js";

const Lanes = ({ lanes, days, selectedMonth, months }) => {
  return (
    <div className="flex flex-col gap-4 z-10">
      {lanes.map((lane, index) => (
        <div
          key={index}
          className="grid gap-x-1"
          style={{ gridTemplateColumns: `repeat(${days}, 1fr)` }}
        >
          {lane.map((item) => (
            <Lane
              key={item.id}
              item={item}
              selectedMonth={selectedMonth}
              months={months}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Lanes;

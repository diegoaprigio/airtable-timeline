import { transformToDateUTC } from "../assignLanes";

const Lane = ({ item, selectedMonth, months }) => {
  const startDate = transformToDateUTC(item.start);
  const endDate = transformToDateUTC(item.end);
  const startMonth = startDate.getMonth();
  const endMonth = endDate.getMonth();
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();
  const month = months[selectedMonth];
  const isStartDateInRange =
    startMonth === month.id && startYear === month.year;
  const isEndDateInRange = endMonth === month.id && endYear === month.year;

  if (!isStartDateInRange) {
    startDate.setDate(1);
    startDate.setMonth(selectedMonth);
  }
  if (!isEndDateInRange) {
    endDate.setDate(month.totalDaysInMonth);
    endDate.setMonth(selectedMonth + 1);
  }

  const duration = endDate - startDate;
  const durationInDays = Math.ceil(duration / (1000 * 60 * 60 * 24));

  const gridStart = startDate.getDate();
  const gridEnd =
    durationInDays > 1 ? gridStart + durationInDays + 1 : gridStart + 1;

  return (
    <div
      key={item.id}
      className="flex flex-row items-center justify-center relative border-2 border-solid border-green-100 bg-green-50 rounded-lg p-2 h-10 text-black cursor-pointer hover:bg-green-100 hover:border-green-200 transition-all duration-300 ease-in-out"
      style={{ gridColumnStart: gridStart, gridColumnEnd: gridEnd }}
    >
      <span className="outline-none truncate w-full text-center text-semibold text-sm">
        {item.name}
      </span>
    </div>
  );
};

export default Lane;

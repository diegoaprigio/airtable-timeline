import { ChevronLeft, ChevronRight } from "lucide-react";

const MonthSelector = ({ selectedMonth, setSelectedMonth, months }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-8 pt-8">
      <div className="flex w-[250px] flex-row items-center justify-center gap-x-4">
        <button
          className="text-blue-500 disabled:opacity-50"
          onClick={() => setSelectedMonth(selectedMonth - 1)}
          disabled={selectedMonth === 0}
        >
          <ChevronLeft />
        </button>
        <h2 className="text-xl font-bold uppercase text-center">
          {months[selectedMonth]?.month} {months[selectedMonth]?.year}
        </h2>
        <button
          className="text-blue-500 disabled:opacity-50"
          onClick={() => setSelectedMonth(selectedMonth + 1)}
          disabled={selectedMonth === months.length - 1}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MonthSelector;

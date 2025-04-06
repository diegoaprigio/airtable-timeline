const DaysSubHeader = ({ days }) => {
  //[calc(100vh-5rem)]
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${days.length}, 1fr)` }}
    >
      {days.map((day, index) => (
        <div key={index} className="flex flex-col justify-center gap-4 p-2">
          <span className="text-xs text-gray-400">{day}</span>
          <div className="h-[calc(100vh-10rem)] w-1 absolute top-40 mt-1 border-r-2 border-solid border-gray-100"></div>
        </div>
      ))}
    </div>
  );
};

export default DaysSubHeader;

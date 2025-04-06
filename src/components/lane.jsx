const Lane = ({ item, selectedMonth, months }) => {
  return (
    <div className="flex flex-row gap-2 items-center justify-center relative border-2 border-solid border-green-100 bg-green-50 rounded-lg p-2 text-black">
      <span>{item.name}</span>
    </div>
  );
};

export default Lane;

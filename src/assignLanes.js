/**
 * Takes an array of items and assigns them to lanes based on start/end dates.
 * @returns an array of arrays containing items.
 */
export const assignLanes = (items, month, year) => {
  const filteredItems = items.filter((item) => {
    const itemStartDate = transformToDateUTC(new Date(item.start));
    const itemEndDate = transformToDateUTC(new Date(item.end));

    return (
      (itemStartDate.getMonth() === month &&
        itemStartDate.getFullYear() === year) ||
      (itemEndDate.getMonth() === month && itemEndDate.getFullYear() === year)
    );
  });

  const sortedItems = filteredItems.sort(
    (a, b) => new Date(a.start) - new Date(b.start)
  );

  const lanes = [];

  function assignItemToLane(item) {
    for (const lane of lanes) {
      if (new Date(lane[lane.length - 1].end) < new Date(item.start)) {
        lane.push(item);
        return;
      }
    }
    lanes.push([item]);
  }

  for (const item of sortedItems) {
    assignItemToLane(item);
  }
  return lanes;
};

export const getFirstAndLastDate = (items) => {
  const dates = items.map((item) => transformToDateUTC(new Date(item.start)));
  console.log("Dates:", dates);
  const sortedDates = dates.sort((a, b) => new Date(a) - new Date(b));

  const firstDate = new Date(sortedDates[0]);
  const lastDate = new Date(sortedDates[sortedDates.length - 1]);
  return { firstDate, lastDate };
};

export const transformToDateUTC = (date) => {
  const utcDate = new Date(date).toLocaleString("en-US", {
    timeZone: "UTC",
    dateStyle: "short",
  });
  return new Date(utcDate);
};

export const getMonths = (items) => {
  const { firstDate, lastDate } = getFirstAndLastDate(items);
  console.log("First Date:", firstDate);
  console.log("Last Date:", lastDate);
  const months = [];

  while (firstDate <= lastDate) {
    const date = new Date(firstDate);
    firstDate.setMonth(firstDate.getMonth() + 1);
    firstDate.setDate(1);

    const monthIndex = date.getMonth();
    const monthName = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const month = {
      id: monthIndex,
      month: monthName,
      year: year,
      totalDaysInMonth: new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate(),
    };

    months.push(month);
  }

  console.log(months);
  return months;
};

export const getYears = (items) => {
  const { firstDate, lastDate } = getFirstAndLastDate(items);
  const years = [];

  while (firstDate <= lastDate) {
    const date = new Date(firstDate);
    firstDate.setFullYear(firstDate.getFullYear() + 1);

    const year = {
      year: date.getFullYear(),
    };

    years.push(year);
  }

  console.log("Years:", years);
  return years;
};

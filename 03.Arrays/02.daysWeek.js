function weekDays(dayAsNum) {

  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let index = dayAsNum - 1;

  if (dayAsNum < 1 || dayAsNum > 7) {
    console.log("Invalid day!");
  } else {
    console.log(days[index]);
    
  }
}

weekDays(1);
weekDays(4);
weekDays(5);
weekDays(9);
weekDays(-1);

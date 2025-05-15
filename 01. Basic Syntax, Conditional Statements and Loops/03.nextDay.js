function nextDay(year, month, day) {
  // In JavaScript, months are 0-indexed (0 = January, 11 = December)
  let date = new Date(year, month - 1, day);

  // Add one day (24 * 60 * 60 * 1000 milliseconds)
  date.setDate(date.getDate() + 1);

  // Format the result in YYYY-M-D format
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

// Example usage
nextDay(2016, 9, 30); // Output: 2016-10-1
nextDay(2020, 3, 24); // Output: 2020-3-25

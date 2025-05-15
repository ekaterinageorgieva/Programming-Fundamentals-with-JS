// Write a function, which changes the value of odd and even numbers in an array of numbers.
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position
// Output
// On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.

//// Input [5, 15, 23, 56, 35]	Output[ 5, 14, 21, 59, 31 ]// 134 130

//// Input [-5, 11, 3, 0, 2]	Output[ -5, 10, 1, 3, 6 ]// 11 15

function solve(array) {
  let originalArray = [...array]; // Create a copy of the original array to calculate its sum
  let sumOfOriginalArray = 0;
  let modifiedArraySum = 0;

  // Modify the array based on even or odd values and calculate the sums
  for (let index = 0; index < array.length; index++) {
    sumOfOriginalArray += originalArray[index];
    if (originalArray[index] % 2 === 0) {
      array[index] += index;
    } else {
      array[index] -= index;
    }
  }

  // Calculate the sum of the modified array
  for (let i = 0; i < array.length; i++) {
    modifiedArraySum += array[i];
  }

  // Output the modified array and the sums
  console.log(array);
  console.log(sumOfOriginalArray);
  console.log(modifiedArraySum);
}

// Test with the given input
solve([5, 15, 23, 56, 35]);

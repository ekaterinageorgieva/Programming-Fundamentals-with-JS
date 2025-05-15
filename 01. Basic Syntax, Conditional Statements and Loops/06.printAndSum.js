function printAndSum(start, end) {
    let allNumbers = "";
    let sum = 0;

    for (let i = start; i <= end; i++) {
      allNumbers = allNumbers + i + " ";
      sum += i;
    }
    console.log(allNumbers.trim());
    console.log(`Sum: ${sum}`);
  }

  printAndSum(5,10)
  printAndSum(0,26)
  printAndSum(50,60)
function solve(arr) {
    let k = arr[0]// gives us the number k.
    let numbers = arr.slice(1)//gives us the array to process.

    let firstK = numbers.slice(0, k)//takes the first k numbers.
    let lastK = numbers.slice(-k)//takes the last k numbers.

    console.log(firstK.join(" "));
    console.log(lastK.join(" "));
    
}

solve([2, 7, 8, 9]);
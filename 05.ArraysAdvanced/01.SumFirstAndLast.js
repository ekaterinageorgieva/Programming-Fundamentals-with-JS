// function sumFirstAndLast(inputData) {

//     const inputArray = inputData.slice();
//     let firstElement = Number(inputArray.shift());
//     let lastElement = Number(inputArray.pop());
//     let result = firstElement + lastElement;
//     console.log(result);
    
// }

// sumFirstAndLast(['20', '30', '40'])


function solve(array){
    
    let first = array.shift();
    let last = array.pop()

    console.log(Number(first) + Number(last));
}

solve(['20', '30', '40'])
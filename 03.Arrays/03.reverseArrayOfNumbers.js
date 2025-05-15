function reverse(numberN, inputArr) {

    let slice = [];

    for (let index = 0; index < numberN; index++) {
        slice.push(inputArr[index])
        
    }

    console.log(slice.reverse().join(' '));
    
}

reverse(3, [10, 20, 30, 40, 50])
reverse(4, [-1, 20, 99, 5])
reverse(2, [66, 43, 75, 89, 47])
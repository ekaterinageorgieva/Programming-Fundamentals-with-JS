function sum(arr) {
    let sum = 0
    for (let item of arr) {
        sum += item
    }
    return sum;
}

console.log(sum([1,2])); 
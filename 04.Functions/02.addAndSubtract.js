function addAndSubtract(int1, int2, int3) {
    function sum(a, b) {
        return a + b;
    }

    let sumOfTwo = sum(int1, int2);

    function substract(sumOfTwo, c) {
        return sumOfTwo - c;
    }

    let result = substract(sumOfTwo, int3);
    return result;
}

console.log(addAndSubtract(23, 6, 10));   // Output: 19
console.log(addAndSubtract(1, 17, 30));   // Output: -12
console.log(addAndSubtract(42, 58, 100)); // Output: 0

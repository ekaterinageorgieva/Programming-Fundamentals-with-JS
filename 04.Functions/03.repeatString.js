function repeat(string, count) {
    let result = '';
    for (let index = 1; index <= count; index++) {
        result += string
    }
    return result;
}

console.log(repeat("abc", 3))
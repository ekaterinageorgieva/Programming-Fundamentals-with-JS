function checkCase(char) {
    if (char === char.toUpperCase()) {
        console.log("upper-case");
    } else {
        console.log("lower-case");
    }
}

// Example:
checkCase('L');  // Output: upper-case
checkCase('l');  // Output: lower-case
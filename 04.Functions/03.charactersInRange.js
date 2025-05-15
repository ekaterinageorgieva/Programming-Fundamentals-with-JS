function charactersInRange(char1, char2) {
  let firstChar = Math.min(char1.charCodeAt(), char2.charCodeAt());
  let secondtChar = Math.max(char1.charCodeAt(), char2.charCodeAt());
  let array = [];

  for (let i = firstChar + 1; i < secondtChar; i++) {
    let currentChar = String.fromCharCode(i);
    array.push(currentChar);
  }

  let result = array.join(' ');
  return result;
}

console.log(charactersInRange("a", "d"));
console.log(charactersInRange("#", ":"));
console.log(charactersInRange("C", "#"));

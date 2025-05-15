function solve(word, char, math) {

    let result = word.replace('_', char)
    let output = result === math ? "Matched" : "Not Matched"
    console.log(output);
    
}

solve('Str_ng', 'I', 'Strong')
solve('Str_ng', 'i', 'String')
function solve(string) {

	let buff = string[0];
    //console.log(buff);

	for (let i = 1; i < string.length; i++) {
		const char = string[i];
		if (char !== string[i - 1] && i < string.length) {
			buff += char;
		}
	}
	console.log(buff);
}

solve('aaaaabbbbbcdddeeeedssaa')

function StringSubstring(givenWord, text) {

	let arr = text.split(' ');
	let word = givenWord.toLowerCase();

	for (let element of arr) {
		let currentWord = element.toLowerCase();
		if (currentWord === givenWord) {
			console.log(word);
			return;
		}
	}

	console.log(`${givenWord} not found!`);

}

StringSubstring('javascript', 'JavaScript is the best programming language')

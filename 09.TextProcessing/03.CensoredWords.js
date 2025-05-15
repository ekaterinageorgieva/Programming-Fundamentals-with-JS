function solve(text, word) {
    let stars = '*'.repeat(word.length);  // Изчисляваме броя на звездите директно
    //console.log(stars);
    let censored = text.replace(word, stars);  // Заменяме думата с звездите
    //console.log(censored);

    while (censored.includes(word)) {
        censored = censored.replace(word, stars);  // Продължаваме да заменяме думата, ако я има
    }

    console.log(censored);  // Извеждаме резултата
}

solve('A small sentence with some words', 'small');

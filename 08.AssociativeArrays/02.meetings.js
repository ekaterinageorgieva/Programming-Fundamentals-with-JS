function meetings(input) {
    // Създаваме празен обект, в който ще записваме срещите
    let result = {};

    // Обхождаме всеки ред от входния масив
    for (let line of input) {
        // Разделяме реда по интервал – получаваме ден и име
        let [day, name] = line.split(' ');

        // Проверяваме дали вече има среща на този ден
        if (result.hasOwnProperty(day)) {
            // Ако вече има, отпечатваме съобщение за конфликт
            console.log(`Conflict on ${day}`);
        } else {
            // Ако денят е свободен, записваме срещата
            result[day] = name;  // <-- Тук добавяме в обекта!!!

            // Отпечатваме съобщение, че сме я насрочили
            console.log(`Scheduled for ${day}`);
        }
    }

    // След като сме обработили всички входни данни,
    // отпечатваме финалния график на срещите
    for (let day in result) {
        console.log(`${day} -> ${result[day]}`);
    }
}


meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
function isSumEqual(arr) {
    
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        // Сума отляво
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        // Сума отдясно
        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }

        if (leftSum === rightSum) {
            console.log(i); // индексът, където лявата и дясната сума са равни
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("no");
    }
}



isSumEqual([1, 2, 3, 3])
isSumEqual([1, 2])
isSumEqual([1])
isSumEqual([1, 2, 3])
isSumEqual([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
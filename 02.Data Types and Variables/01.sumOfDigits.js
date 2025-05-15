function sumOfDigits(input) {

    let sum = 0;
    let number = String(input);
    

    for (let a = 0; a < number.length; a++) {
        let digit = Number(number.charAt(a));
        sum += digit;
    }
    console.log(sum);
}



// function sumOfDigits(n) { 

//     sum = 0;

// while (n) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
// }

// console.log(sum);
// }

sumOfDigits(245678)
sumOfDigits(97561)
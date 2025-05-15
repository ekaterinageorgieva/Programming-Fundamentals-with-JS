// function isNumFloat(a, b, c) {

//     let sum = a + b + c


//     let sumAsString = String(sum)
//     let typeOfNum = 'Integer';

//     for (let index = 0; index < sumAsString.length; index++) {

//         if (sumAsString[index] == '.') {
//             typeOfNum = 'Float';
            
//         } 

//         console.log(`${sum} - ${typeOfNum}`)

//     }
// }




function isNumFloat(a, b, c) {
    let sum = a + b + c;
    let sumAsString = String(sum);
    let typeOfNum = 'Integer';

    if (sumAsString.includes('.')) {
        typeOfNum = 'Float';
    } else{
        typeOfNum = 'Integer';
    }

    console.log(`${sumAsString} - ${typeOfNum}`);
}


// function isNumFloat(a, b, c) {
//     let sum = a + b + c;
//     let typeOfNum = Number.isInteger(sum) ? 'Integer' : 'Float';
//    console.log(`${sum} - ${typeOfNum}`);
// }



isNumFloat(1, 2 , 3)
isNumFloat(1, 2 , 3.14)
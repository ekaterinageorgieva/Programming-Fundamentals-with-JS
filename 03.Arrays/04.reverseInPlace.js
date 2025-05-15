function reverseArr(arrayOfStrings) {
    let result = arrayOfStrings.reverse().join(' ');
    console.log(result);
    

}

reverseArr(['a', 'b', 'c', 'd', 'e'])
reverseArr(['abc', 'def', 'hig', 'klm', 'nop'])
reverseArr(['33', '123', '0', 'dd'])

/////////////////////////////////////////////2ri variant:
function reverseArr2(array) {
    
    for (let index = 0; index < array.length / 2; index++) {
        let currentVaraible = array.length -1 - index;
        let replaceVariable = array[index];
        array[index] = array[currentVaraible];
        array[currentVaraible] = replaceVariable
    }

    console.log(array.join(' '));
    

}

reverseArr2(['a', 'b', 'c', 'd', 'e'])
reverseArr2(['abc', 'def', 'hig', 'klm', 'nop'])
reverseArr2(['33', '123', '0', 'dd'])
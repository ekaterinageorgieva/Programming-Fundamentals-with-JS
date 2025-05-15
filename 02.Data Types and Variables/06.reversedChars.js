function charsReverse(char1, char2, char3) {

    order = (char1 + char2 + char3).split('').reverse().join(' ');
    console.log(order);
    
}

charsReverse('A', 'B', 'C')
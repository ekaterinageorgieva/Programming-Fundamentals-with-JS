function roundng(num, precision) {
    num = Number(num);
    precision = Number(precision);

    if(precision > 15){
        precision = 15;
    }
    num = num.toFixed(precision);
    console.log(parseFloat(num));
    
}

roundng(3.14656598598989, 2)
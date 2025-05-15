function solve(num) {

    for (let index = 1; index <= num; index++) {
        let line = '';

        for (let secondIndex = 0; secondIndex <= index; secondIndex++) {
            line += index;
            if (secondIndex != index) {
                line += " ";
            }
        }
        console.log(line);
    }
}

solve(5)
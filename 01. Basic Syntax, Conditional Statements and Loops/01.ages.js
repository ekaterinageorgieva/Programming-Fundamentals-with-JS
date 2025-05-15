function solve(num) {
    let age = 0;
    if(num < 0 || num <= 2){
        age = "baby"
    } else if ( num <= 13){
        age = "is a child"
    } else if ( num <= 19){
        age = "is a teenager"
    } else if ( num <= 65){
        age = "is adult"
    } else if (num >= 66){
        age = "is an elder"
    } else {
        age = "out of bounds"
    }
console.log(age);
}

solve(20)
solve(1)
solve(100)
solve(-1)
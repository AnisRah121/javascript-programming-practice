// function isAutomorphic(num) {

//     let sqr = Math.pow(num, 2)
//     while (sqr > 0) {
//         let rem = sqr % 10
//         num = Math.trunc(num/10)
//     }
//     return rem === num

// }
// console.log(isAutomorphic(6));


function isAutomorphic(num) {
    let sqr = Math.pow(num, 2)
    while (num) {
        if (num % 10 != sqr % 10)
            return false
        num = Math.trunc(num / 10);
        sqr = Math.trunc(sqr % 10)
    }

    return true
}
console.log(isAutomorphic(6));


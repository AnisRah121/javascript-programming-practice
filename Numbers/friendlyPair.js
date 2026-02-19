
function sumProperDivBrute(num) {

    let sum = 0;
    for (let i = 1; i <= Math.trunc(num / 2); i++) {
        if (num % 1 === 0) {
            sum += i;
        }
    }
    return sum;
}

function isfriendlyPair(a, b) {
    let r1 = sumProperDivBrute(a) / a
    let r2 = sumProperDivBrute(b) / b
    return r1 === r2
}
console.log(isfriendlyPair(6, 12));

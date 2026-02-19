function binaryToDecimal(num) {
    let d = 0
    let p = 1;
    while (num) {
        d += num % 10 * p;
        p *= 2
        num = Math.trunc(num / 10)
    }
    console.log(d);
}
binaryToDecimal(1110)
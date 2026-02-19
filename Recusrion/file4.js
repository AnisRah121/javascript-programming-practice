function sumVal(n) {
    let sum = 0;

    if (n < 1) return n;

    while (n > 1) {
        let rem = n % 10;
        sum += rem;
        n = Math.trunc(n / 10)
    }
    return sum

}
console.log(sumVal(452));

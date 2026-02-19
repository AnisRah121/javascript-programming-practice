function pattern(n) {
    let str = ''

    for (let i = 1; i <= n; i++) {

        for (let s = 1; s <= n-i; s++) {
            str += '_ '
        }
        for (let num = 1; num <= 2 * i - 1; num++) {
            str += i + ' '
        }
        str += '\n'
    }
    return str

}
console.log(pattern(5));

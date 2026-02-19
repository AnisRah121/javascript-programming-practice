
function pattern(n) {

    let str = ''
    for (let i = 1; i <= n; i++) {

        for (let s = 1; s <= i - 1; s++) {
            str += '_ '
        }
        for (let num = 1; num <= n - i + 1; num++) {
            str += i + ' '
        }
        str += '\n'
    }
    return str
}
console.log(pattern(5));


// 1 1 1 1 1
// _ 2 2 2 2
// _ _ 3 3 3
// _ _ _ 4 4
// _ _ _ _ 5


function pattern(n) {
    let str = ''
    for (let i = 1; i <= n; i++) {

        for (let s = 1; s <= n - i; s++) {
            str += '_ '
        }
        for (let num = 1; num <= 2 * i - 1; num++) {
            str += num + ' '
        }
        str += '\n'
    }
    return str
}
console.log(pattern(5));



/*
_ _ _ _ 1 
_ _ _ 1 2 3 
_ _ 1 2 3 4 5 
_ 1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 9

 */
function pattern(n) {

    let str = ''
    for (let i = 1; i <= n; i++) {

        for (let s = 1; s <= i - 1; s++) {
            str += '_ '
        } 
        for (let num = n; num >= i; num--) {
            str += num + ' '
        }
        str += '\n'
    }
    return str
}
console.log(pattern(5));

//expected
/*
5 4 3 2 1
_ 5 4 3 2
_ _ 5 4 3
_ _ _ 5 4
_ _ _ _ 5

 */
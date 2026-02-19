function pattern(n) {

    let str = ''
    for (let i = 1; i <= n; i++) {

        for (let s = 1; s <= i - 1; s++) {
            str += '_ '
        }

        // we can also use this
        // for (let num = n; num >= i; num--) {
        //     str += n - i + 1 + ' '
        // }
        // str += '\n'

        // let value = n - i + 1
        for (let num = 1; num <= n - i + 1; num++) {
            str += n - i + 1 + ' '
        }
        str += '\n'
    }
    return str
}
console.log(pattern(5));


/*

5 5 5 5 5
_ 4 4 4 4
_ _ 3 3 3
_ _ _ 2 2
_ _ _ _ 1

 */
function pattern(n) {

    let str = ''
    for (let i = 1; i <= n; i++) {

        for (let s = 1; s <= i-1; s++) {
            str += '_ '
        }
        for (let num = n - i + 1; num >= 1; num--) {
            str += num + " "
        }
        str += '\n'
    }

    return str

}
console.log(pattern(5));

/*
Expected o/p

5 4 3 2 1 
_ 4 3 2 1
_ _ 3 2 1
_ _ _ 2 1
_ _ _ _ 1
 */
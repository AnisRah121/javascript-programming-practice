function pattern(n) {

    let str = ''
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            for (let j = n; j >= i; j--) {
                if (j % 2 !== 0) {
                    str += j + ' '
                }
                else {
                    str += '*' + ' '
                }
            }
        }
        else {
            for (let j = n; j >= i; j--) {
                if (j % 2 !== 0) {
                    str += j
                }
                else {
                    str += '*' + ' '
                }
            }
        }
        str += '\n'
    }
    return str
}
console.log(pattern(5));

/*
5 * 3 * 1 
5*  3 *
5 * 3
5 *
5
*/
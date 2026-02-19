function pattern(n) {
    let str = ''

    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            str += j + ' '
        }
        str += '\n'
    }
    return str

}
console.log(pattern(5));


// 5 4 3 2 1 
// 5 4 3 2
// 5 4 3
// 5 4
// 5

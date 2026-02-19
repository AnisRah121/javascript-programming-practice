function patter5(n) {
    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === 1 || j === 1 || i === 5 || j === 5) {
                str += '*'
            }
            else {
                str += ' '
            }
        }
        str+= '\n'
    }
    return str
}
console.log(patter5(5));

/*

*****
*   *
*   *
*   *
*****


*/
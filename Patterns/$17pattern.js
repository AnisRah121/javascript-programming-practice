function pattern(n) {
    let str = ''

    for (let i = 1; i <= n; i++) {
        for (let j = n - i + 1; j <= n; j++) {
            str += '*' + ' '
        }
        str+='\n'
    }
    return str
}
console.log(pattern(5));

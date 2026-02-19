function pattern(n) {
    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === 1) {
                str += j + ' '
            }
            else if (j == 1) {
                str += i + ' '
            }
            else (i == n)
            str += n - i + 1 + ' '
        }
        str+='\n'
    }
    return str
}

console.log(pattern(5));

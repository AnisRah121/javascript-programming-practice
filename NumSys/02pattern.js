function patter2(n) {
    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            str += j;
        }
        str += '\n'
    }
    return str
}
console.log(patter2(5));

/*

12345
12345
12345
12345
12345


 */
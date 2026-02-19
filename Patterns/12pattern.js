

function pattern12(n) {
    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            // str += '*'
            str += j
        }
        str += '\n'
    }
    console.log(str);
}
pattern12(5)


// 1
// 12
// 123
// 1234
// 12345
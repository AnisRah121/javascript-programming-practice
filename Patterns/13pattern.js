

function pattern12(n) {
    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = i; j >=1 ; j--) {
            // str += '*'
            str += j
        }
        str += '\n'
    }
    console.log(str);
}
pattern12(5)

// 1
// 21
// 321
// 4321
// 54321


function pattern12(n) {
    let str = ''
    for (let i = n; i >= 1; i--) {
        for (let j = n; j >=i ; j--) {
            // str += '*'
            str += j
        }
        str += '\n'
    }
    console.log(str);
}
pattern12(5)

// 5
// 54
// 543
// 5432
// 54321
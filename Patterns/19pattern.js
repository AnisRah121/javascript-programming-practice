// function pattern(n) {
//     let str = ''
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n - i; j++) {
//             str += '_' + ' '
//         }
//         for (let j = 1; j <= i; j++) {
//             str += '*' + ' '
//         }
//         str+='\n'
//     }
//     return str
// }
// console.log(pattern(5));

// function pattern(n) {
//     let str = ''
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n - i; j++) {
//             str += '_' + ' '
//         }
//         for (let j = n; j >= 1; j--) {
//             str += j + ' '
//         }
//         str+='\n'
//     }
//     return str
// }
// console.log(pattern(5));


function pattern(n) {
    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            str += '*' + ' '
        }
        for (let j = n; j >= 1; j--) {
            str += j + ' '
        }
        str+='\n'
    }
    return str
}
console.log(pattern(5));

// Excepted output
// * * * * 5 
// * * * 5 4 
// * * 5 4 3 
// * 5 4 3 2 
// 5 4 3 2 1
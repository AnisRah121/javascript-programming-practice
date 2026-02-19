/*
1       2       3       4       5
6       7       8       9       10
11      12      13      14      15
16      17      18      19      20
21      22      23      24      25
*/


// function patter8(n) {

//     let str = ''
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             str += ((n * (i - 1) + j)) + '\t'
//         }
//         str += '\n'
//     }
//     return str
// }
// console.log(patter8(5));

function patterp(n) {

    let str = ''
    let c=1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            str += (c++) + '\t'
        }
        str += '\n'
    }
    return str
}
console.log(patterp(5));


// function patter8(n){

//     let str=' '
//     let c=1;
//     for(let i = 1 ; i<=n;i++){
//         for(let j = 1 ; j<= n ; j++){
//             str+= c++ + '\t'
//         }
//         str+='\n'
//     }
//     return str
// }
// console.log(patter8(5));


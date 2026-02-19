// function patter10(n) {
//     let str = ''
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//               if(i===Math.ceil(n/2)){
//                 str+=i + ' '
//               }
//               else if(j === Math.ceil(n/2)){
//                 str+=j + ' '
//               }
//               else{
//                 str+='_' + '\t'
//               }
//         }

//     }
//     return str

// }
// console.log(patter10(5));


// // _ _ 1 _  _
// // _ _ 2 _  _
// // 1 2 3 2  1
// // _ _ 2 _  _
// // _ _ 1 _  _

function pattern10(n) {
    let str = '';
    let mid = Math.ceil(n / 2);

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {

            if (i === mid || j === mid) {
                let val = Math.min(i, j, n - i + 1, n - j + 1);
                str += val + ' ';
            } else {
                str += '_ ';
            }
        }
        str += '\n';
    }
    return str;
}

console.log(pattern10(5));

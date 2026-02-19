
// function pattern(n) {

//     let str = ''
//     for (let i = 1; i <= n; i++) {

//         //space
//         for (let s = 1; s <= n - i; s++) {
//             str += '_ '
//         }

//         //Inc
//         for (let num = 65; num <= 65-i+1; num++) {
//            str += String.fromCharCode(65) + ' '
//         }

//         //Dec
//         for (let num = 64+i; num >= 65; num--) {
//             str += String.fromCharCode(num) + ' '
//         }
//         str += '\n'
//     }
//     return str
// }

// console.log(pattern(5));

/*
expected o/p
_ _ _ A
_ _ A B A
_ A B C B A
A B C D C B A
_ A B C B A
_ _ A B A 
_ _ _ A 





 */


function pattern(n) {

    let str = '';
    let totalRows = 2 * n - 1;

    for (let row = 1; row <= totalRows; row++) {

        let currentRow = row <= n ? row : totalRows - row + 1;

        for (let s = 1; s <= n - currentRow; s++) {
            str += '_ ';
        }

        // inc
        for (let i = 1; i <= currentRow; i++) {
            str += String.fromCharCode(64 + i) + ' ';
        }

        // dec
        for (let i = currentRow - 1; i >= 1; i--) {
            str += String.fromCharCode(64 + i) + ' ';
        }

        str += '\n';
    }

    return str;
}

console.log(pattern(4));

// function pattern(n) {
//     let str = ''

//     for (let i = 1; i <= n; i++) {

//         for (sp = 1; sp <= n - i; sp++) {
//             str += '_' 
//         }

//         for (digit = i; digit >= 1; digit--) {
//             str += digit + ' '
//         }
//         str += '\n'
//     }
//     return str

// }
// console.log(pattern(5));

function pattern(n) {
    let str = '';

    for (let i = 1; i <= n; i++) {

        // spaces
        for (let sp = 1; sp <= n - i; sp++) {
            str += '_ ';
        }

        // numbers (reverse)
        for (let digit = i; digit >= 1; digit--) {
            str += digit + ' ';
        }

        str += '\n';
    }

    return str;
}

console.log(pattern(5));


// _ _ _ _ 1 
// _ _ _ 2 1
// _ _ 3 2 1
// _ 4 3 2 1
// 5 4 3 2 1


function pattern(n) {

    let str = ''
    for (let i = 1; i <= n; i++) {

        //space
        for (let s = 1; s <= n - i; s++) {
            str += '_ '
        }

        //Inc
        for (let num = 1; num <= i; num++) {
            str += num + ' '
        }

        //Dec
        for (let num = i - 1; num >= 1; num--) {
            str += num + ' '
        }
        str += '\n'
    }
    return str
}

console.log(pattern(5));




/*
_ _ _ _ 1 
_ _ _ 1 2 1 
_ _ 1 2 3 2 1 
_ 1 2 3 4 3 2 1
1 2 3 4 5 4 3 2 1

*/
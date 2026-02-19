function pattern(n) {

    let str = ''
    for (let i = 1; i <= n; i++) {

        for (let s = 1; s <= i-1; s++) {
            str += '_ '
        }

        for (let num = i; num <= n; num++) {
            str += num + ' '
        }
        str += '\n'
    }
    return str
}

console.log(pattern(5));


/*
1 2 3 4 5
_ 2 3 4 5
_ _ 3 4 5
_ _ _ 4 5
_ _ _ _ 5



*/
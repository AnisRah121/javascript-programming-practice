function pattern(n) {

    let str = ''
    for (let i = 1; i <= n; i++) {

        for (let s = 1; s <= i-1; s++) {
            str += '_ '
        }
        for (let num = n - i + 1; num >= 1; num--) {
            str += "*" + " "
        }
        str += '\n'
    }

    return str

}
console.log(pattern(5));

/*
Expected o/p

* * * * * 
_ * * * *
_ _ * * *
_ _ _ * *
_ _ _ _ *

 */
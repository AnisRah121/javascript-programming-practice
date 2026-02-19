function pattern(n) {

    let space = n - 1
    let star = 1
    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let s = 1; s <= star; s++) {
            str += 'X' + '\t'
        }
        for (let m = 1; m <= space; m++) {
            str += '_ ' + '\t'
        }
        for (let s = 1; s <= star; s++) {
            str += 'X' + '\t'
        }

        str += '\n'

        if (i <= n / 2) {
            star++
            space -= 2
        }
        else {
            star--
            space += 2
        }
    }
    return str
}
console.log(pattern(5));

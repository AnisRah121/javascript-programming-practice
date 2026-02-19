function pyramid(n) {

    let str = ''
    let sp = Math.trunc(n / 2)
    let stars = 1
    for (let i = 1; i <= n; i++) {

        //space
        for (let j = 1; j <= sp; j++) {
            str += ' ' + ' '
        }
        //stars
        for (let j = 1; j <= stars; j++) {
            str += '*' + ' '
        }
        str += '\n'
        if (i < n / 2) {
            stars += 2
            sp--;
        } else {
            stars -= 2
            sp++
        }

    }
    return str
}
console.log(pyramid(7));

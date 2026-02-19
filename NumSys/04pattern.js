function patter4(n) {

    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j % 2 === 0) {
                str += j + ' '
            }
            else {
                str += i + ' '
            }
        }
        str += '\n'
    }

    return str

}
console.log(patter4(5));

/*

1 2 1 4 1 
2 2 2 4 2
3 2 3 4 3
4 2 4 4 4
5 2 5 4 5

*/
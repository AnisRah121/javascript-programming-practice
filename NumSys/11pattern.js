function pattern11(n) {
    let str = '';

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {

            if (i === 1) {
                str += j + ' ';
            }
            else if (i === n) {
                str += (n - j + 1) + ' ';
            }
            else if (j === 1) {
                str += i + ' ';
            }
            else if (j === n) {
                str += (n - i + 1) + ' ';
            }
            else {
                str += '  '; // very important: TWO spaces
            }
        }
        str += '\n';
    }
    return str;
}

console.log(pattern11(5));


/**
1 2 3 4 5
2       4
3       3
4       2
5 4 3 2 1


 */
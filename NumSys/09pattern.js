function pattern9(n) {
    let str = '';
    let mid = Math.ceil(n / 2);

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j === mid) {
                str += i + '\t';        // vertical line
            }
            else if (i === mid) {
                str += j + '\t';        // horizontal line
            }
            else {
                str += '_\t';
            }
        }
        str += '\n';
    }
    return str;
}

console.log(pattern9(5));


// _ _ 1 _  _
// _ _ 2 _  _
// 1 2 3 4  5
// _ _ 4 _  _
// _ _ 5 _  _
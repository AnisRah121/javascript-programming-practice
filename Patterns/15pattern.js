function pattern(n) {

    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = n; j>=i ; j--){
            str+=n-i+1 +' '
        }
        str+='\n'
    }
    return str
}
console.log(pattern(5));

// 5 5 5 5 5 
// 4 4 4 4
// 3 3 3
// 2 2
// 1
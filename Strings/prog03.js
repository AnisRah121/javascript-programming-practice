function pattern(n) {
    let res = ''
    for (let i = 1; i <= n * n; i++) {
        res += String.fromCharCode(i + 64) + '\t'
    
    if (i % 5==0) {
        res += '\n'
    }
}

    console.log(res);
}
pattern(5)

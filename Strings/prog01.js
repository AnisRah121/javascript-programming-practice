function pattern(n) {

    let str = '';

    for (let i = 1; i <= n; i++) {

        for (let s = 1; s <= n - i; s++) {
            str += '_  '
        }

        for (let letter = 65; letter <= 65 + i - 1; letter++) {
            str += String.fromCharCode(letter) + ' ';
        }
        str += '\n'
    }
    return str
}
console.log(pattern(5));

/*
expected o/p


_  _  _  _  A  
_  _  _  A  B 
_  _  A  B  C
_  A  B  C  D
A  B  C  D  E 
*/
function pattern(n) {

    let str = '';

    for (let i = 1; i <= n; i++) {

       
        for (let letter = 64 + i; letter >= 65; letter--) {
            str += String.fromCharCode(letter) + ' ';
        }

        str += '\n';
    }

    return str;
}

console.log(pattern(5));


/*cc
expected o/p


A  
B A 
C B A 
D C B A 
E D C B A

*/
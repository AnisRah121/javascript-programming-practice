function pyramid(n) {

    let str = ''
    for (let i = 1; i <= n; i++) {

        // spaces
        for (let s = 1; s <= n - i; s++) {
            str += '_ ';
        }

        // stars
        for (let star = 1; star <= 2 * i - 1; star++) {
            str += '* ';
        }

        str += '\n';
    }

    return str;
}
console.log(pyramid(5));

/**
Chapter 2 :
_ _ _ _ * 
_ _ _ * * * 
_ _ * * * * * 
_ * * * * * * * 
* * * * * * * * * 

 */
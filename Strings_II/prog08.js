function analyzeString(str) {
    let small = 0;
    let capital = 0;
    let special = 0;
    let hasDigit = false;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch >= 'A' && ch <= 'Z') {
            capital++;
        }
        else if (ch >= 'a' && ch <= 'z') {
            small++;
        }
        else if (ch >= '0' && ch <= '9') {
            hasDigit ++; // detect, count
         //hasDigit = true; // detect, not count
        }
        else{
            special++
        }
       
    }

    return { small, capital, special, hasDigit };
}

let input = 'JsP_@123xyz';
console.log(analyzeString(input));

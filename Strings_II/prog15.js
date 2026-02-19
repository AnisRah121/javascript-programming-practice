
/*
create a function to make repeated characters of given string into capital
i/p : abccdbe
o/p: aBCCdBe


For every character, we:
---------------------------
1.Scan the entire string

2.Count how many times that character appears

3.If count > 1 → make it CAPITAL

4.Else → keep it small

*/


let str = 'abccdbe';

function makeRepeatedLetterCaps(str) {

    let res = '';

    for (let i = 0; i < str.length; i++) {
        let count = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }

        // if (count > 1) {
        //     if (str[i] >= 'a' && str[i] <= 'z') {
        //         let code = str[i].charCodeAt(0) - 32;
        //         res += String.fromCharCode(code);
        //     } else {
        //         res += str[i];
        //     }
        // } else {
        //     res += str[i];
        // }


        if (count === 1) {
            if (str[i] >= 'a' && str[i] <= 'z') {

                res+=str[i]
            //     let code = str[i].charCodeAt(0) - 32;
            //     res += String.fromCharCode(code);
            // } else {
            //     res += str[i];
            }
        }
        //  else {
        //     res += str[i];
        // }
    }

    return res;
}

console.log(makeRepeatedLetterCaps(str));

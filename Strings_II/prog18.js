function removeSpecialChar(str) {

    let res = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z' ||
            str[i] >= 'a' && str[i] <= 'z' ||
            str[i] >= '0' && str[i] <= '9'
        ) {
            res += str[i];
        }
    }
    return res;
}
// let str = 'hello!_#@123'
let str = 'hello!_#@'
console.log(removeSpecialChar(str));


//here i remove number from number of an given string
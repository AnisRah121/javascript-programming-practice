/*create function that will accept one string and check that string contains[small , capital  letter,special character and digits], if all are present then return true else return false.
i/p : 'Jsp@123.com' , 'MERN@123','mern@123'

*/

// let str = 'Jsp@123.com'
// let str = 'MERN#123'
let str = 'mern#123'

function checkValidations() {
    let caps = false, small = false, digit = false, special = false;

    for (let i = 0; i <= str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            caps = true
        }
        else if (str[i] >= 'a' && str[i] <= 'z') {
            small = true
        }
        else if (str[i] >= '0' && str[i] <= '9') {
            digit = true
        }
        else{
            special = true
        }

    }
    return caps && small && digit && special
}

console.log(checkValidations(str));

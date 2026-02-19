// function isPalindrome(num) {
//     let temp = num
//     let rev = 0

//     while (num > 0) {
//         let rem = num % 10
//         rev = (rev * 10 )+ rem
//         num = Math.trunc(num/10)
//     }

//     return rev === temp
// }

function reverseRec(num, rev = 0) {
    if (num === 0) return rev;

    let rem = num % 10;
    return reverseRec(
        Math.trunc(num / 10),
        rev * 10 + rem
    );
}

function isPalindrome(num) {
    return num === reverseRec(num);
}

console.log(isPalindrome(121));    // true
console.log(isPalindrome(12021));  // true
console.log(isPalindrome(21021));  // false

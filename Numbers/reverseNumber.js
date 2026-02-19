/**
 121 -------> 321
 


 */

function reverseNum(num) {
    let rev = 0
    while (num > 0) {
        let rem = num % 10;
        rev = (rev * 10) + rem
        num = Math.trunc(num / 10)
    }
    return rev
}
console.log(reverseNum(1234));


//Recursion Way
// function reverseRec(num, rev = 0) {
//     if (num === 0) return rev;

//     let rem = num % 10;
//     return reverseRec(
//         Math.trunc(num / 10),
//         rev * 10 + rem
//     );
// }
//console.log(reverseRec(12345)); // 121

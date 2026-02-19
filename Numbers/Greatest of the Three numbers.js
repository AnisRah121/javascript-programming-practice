// function greatestOfThree(a, b, c) {
//     return (a > b)
//         ? (a > c ?` ${a} is greater than ${c}` : `${c} is greater than ${a}`)
//         : (b > c ? `${b} is greater than ${c}` : `${c} is greater than ${b}`);
// }
// console.log(greatestOfThree(10, 25, 15))

function greatestOfThree(a, b, c) {
    let max = (a > b)
        ? (a > c ? a : c)
        : (b > c ? b : c);

    return `${max} is the greatest number`;
}

console.log(greatestOfThree(10, 25, 15));

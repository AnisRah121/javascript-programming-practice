/**
 A Spy Number is  a number where the sum of its individual digits equals the product of those same digits
 
 6 :Product (1×2×3=6),  Sum (1+2+3=6) – Spy Number.

 */

function isSpyNumber(num) {
    let prod = 1;
    let sum = 0;

    while (num > 0) {
        let rem = num % 10;
        sum += rem;
        prod *= rem;
        num = Math.trunc(num / 10)
    }
    return prod === sum

}

console.log(isSpyNumber(6));

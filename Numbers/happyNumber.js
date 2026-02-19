/**
 😊 Happy Number kya hota hai?

👉 Happy Number woh number hota hai jisme:
---------------------------------------------
1.Number ke digits ka square nikaalte hain
2.Un squares ka sum karte hain
3.Jo sum aaye, usi process ko repeat karte hain
4.Agar finally 1 aa jaye → ✅ Happy Number
5.Agar loop me phans jao (1 kabhi na aaye) → ❌ Not Happy Number

19 → 1² + 9² = 1 + 81 = 82
82 → 8² + 2² = 64 + 4 = 68
68 → 6² + 8² = 36 + 64 = 100
100 → 1² + 0² + 0² = 1

 */

function next(num) {
    let sum = 0;
    while (num > 0) {
        // let rem = num % 10;
        // let sqr = Math.pow(rem, 2);
        // sum += sqr;

        sum +=Math.pow(num%10,2)
        num = Math.trunc(num / 10)
    }

    return sum
}

function isHappyNumber(num) {
    let slow = num;
    let fast = num;

    do {
        slow = next(slow);
        fast = next(next(fast))
    }
    while (slow !== fast) {
        return slow === 1
    }

}
console.log(isHappyNumber(19))


/**
 
function isHappy(n) {
    let usedIntegers = new Set();   // HashSet equivalent

    while (true) {
        let sum = 0;

        // find sum of squares of digits
        while (n !== 0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.trunc(n / 10);
        }

        // if happy
        if (sum === 1) return true;

        // move to next number
        n = sum;

        // cycle detection
        if (usedIntegers.has(n)) return false;

        usedIntegers.add(n);
    }
}

console.log(isHappy(19)); // true

 */
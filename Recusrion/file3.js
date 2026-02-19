function isPrime(n, i) {
    if (n <= 1) return false
    if (i === 1) return true
    if (n <= i) return true

    return isPrime(n, i - 1)
}

console.log(isPrime(2, Math.sqrt(n)));


/*
🔍 Step-by-Step Dry Run (n = 17)

Initial call:

isPrime(17, 8)

Call	i	n % i	Result
isPrime(17,8)	8	≠ 0	recursive
isPrime(17,7)	7	≠ 0	recursive
isPrime(17,6)	6	≠ 0	recursive
isPrime(17,5)	5	≠ 0	recursive
isPrime(17,4)	4	≠ 0	recursive
isPrime(17,3)	3	≠ 0	recursive
isPrime(17,2)	2	≠ 0	recursive
isPrime(17,1)	1	—	✅ return true

➡️ Final Answer: 17 is PRIME

 */
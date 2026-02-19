function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }

    }
    return true
}

// console.log(isPrime(2));


function printPrimesInRange(start, end) {

    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }

}
printPrimesInRange(1, 10);

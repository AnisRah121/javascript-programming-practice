function sumOfNumberGivenRange(n1, n2) {
    let sum = 0
    for (let i = n1; i <= n2; i++) {
        sum += i
    }
    return sum
}
console.log(sumOfNumberGivenRange(1, 5));

//By Recursion

function byRecursion(n1, n2) {
    if (n1 > n2) return 0

    return n1 + byRecursion(n1 + 1, n2)
}
console.log(byRecursion(1, 5));

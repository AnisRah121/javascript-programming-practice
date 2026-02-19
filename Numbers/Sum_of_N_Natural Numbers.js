
// Using for loops
function byLoop(n) {
    let sum = 0;
    if (n === 0) return 0

    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}
console.log(byLoop(5), `By loops`);

// Using fromula
function byFormula(n) {
    if (n === 0) return 0

    return (n * (n + 1)) / 2  // Using n = n * (n+1)/2 eqn
}

console.log(byFormula(5), `By formula`);

// Using Recursion

function byRecursion(n) {
    if (n === 0) return 0

    return n + byRecursion(n - 1)

}
console.log(byRecursion(5));

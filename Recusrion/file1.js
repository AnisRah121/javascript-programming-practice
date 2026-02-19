function m1(n) {
    if (n === 0) return n

    console.log(n);
    m1(n - 1)
    console.log(n);
}
console.log(m1(5));

function m1(n) {
    if (n === 0) return

    console.log(++n);
    m1(n - 2)
    console.log(--n);
    console.log(n);
}
m1(4)
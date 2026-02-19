function isStrong(num) {
    let temp = num;
    let sum = 0;

    while (num > 0) {
        let rem = num % 10;
        
        function fact(rem) {
            if (rem === 0 || rem === 1) {
                return 1;
            }
            else {
                return rem * fact(rem - 1)
            }
        }
        sum += rem + fact(rem-1)

        num = Math.trunc(num/10)
    }
    return sum === temp
}
console.log(isStrong(145))
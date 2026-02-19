/**
 371 =
 1. Extract  last digit
 2. Cube of extracted digit
 3. sum karo saare cubic digits ko
 4. compare with original number

 */
function lenght(n){

    let cl = 0;
    while(n>0){
        cl++;
        n = Math.trunc(n/10)
    }
    return cl
}

function isArmStrong(num) {
    let temp = num
    let sum = 0;

    while (num > 0) {
        let rem = num % 10;
        let cube = Math.pow(rem, lenght(temp))
        sum += cube
        num = Math.trunc(num / 10)
    }
    return temp === sum
}

console.log(isArmStrong(371));

/*
function isArmstrong(num) {
    let temp = num;
    let digits = num.toString().length;
    let sum = 0;

    while (num > 0) {
        let rem = num % 10;
        sum += Math.pow(rem, digits);
        num = Math.trunc(num / 10);
    }
    return sum === temp;
}

function armstrongInRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (isArmstrong(i)) {
            console.log(i);
        }
    }
}

// Example
armstrongInRange(1, 1000);



*/
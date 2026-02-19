/*
1. create pow function
2. create length function
3. 

89 = 9^2 + 8^1 = 81 + 8 = 89


*/

function isDesarium(num){
    let original = num
    let digits = 0;
    let temp = num

    //step1
    while(temp>0){
        digits++;
        temp = Math.trunc(temp/10)
    }


    let sum = 0;
    temp= num;

    //step2:
    while(temp>0){
        let digit = temp%10;
        sum+=Math.pow(digit,digits)
        digit--;
        temp = Math.floor(temp/10)
    }

    return sum === original
}
console.log(isDesarium(89));

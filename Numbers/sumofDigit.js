function sumofDigit(num){
    let sum = 0;

    if(num <= 0) return num
     
    while(num>0){
        let rem = num%10;
        sum+=rem;
        num = Math.trunc(num/10)
    }
    return(sum)
}
console.log(sumofDigit(11))
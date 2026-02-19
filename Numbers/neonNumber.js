/**
  Input : 9 ----> sqr(9) ---> 81 ----> 8+1 ---> 9


 */


function isNeon(num) {

     let temp = num;
     let sum = 0;
     let sqr = Math.pow(num,2);

     while (sqr > 0) {
          let rem = sqr % 10;
          sum += rem;
          sqr = Math.trunc(sqr / 10)
     }
     return temp === sum

}
console.log(isNeon(9));

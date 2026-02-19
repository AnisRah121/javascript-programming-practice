
function decimalTobinary(n){

    let b=0;
    let p = 1;
    while(n){
        b = (n%2) *b+p;
        n = Math.trunc(n/2)
        p*=10
    }
    console.log(b);
    
}



// function  decimalTobinary(num) {
//     if (num === 0) {
//         console.log(0);
//         return;
//     }

//     let binary = "";

//     while (num > 0) {
//         let rem = num % 2;
//         binary = rem + binary;   
//         num = Math.trunc(num / 2);
//     }

//     console.log(binary);
// }

 decimalTobinary(10); // 1010
 decimalTobinary(14);  // 1110
 decimalTobinary(7);  // 111


// function fibo(n){

//     let a=0,b=1,sum=0;
//     for (let i = 0; i <= n; i++) {
//         console.log(a);
        
//        let c = a+b;
//        a=b;
//        b=c
//        sum+=c
//     }
//      console.log(`total is ${sum}`);
// }
// fibo(5)



function fibo(n) {

    if (n === 0) { return 0; }
    if (n === 1) { return 1; }

    return fibo(n - 1) + fibo(n - 2)
}
function printFibo(n){
    let sum = 0;
    for(let i= 0 ; i<=n;i++){
        console.log(fibo(i));
        
        sum+=i
    }
    console.log(sum);
    
}

printFibo(5);

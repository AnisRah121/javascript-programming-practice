function length(n){

    let cl = 0;

    // if(n===0){
    //     return ('Not allowed')
    // }
    while(n>0){
        cl++;
        n = Math.trunc(n/10)
    }
    return cl

}
console.log(length(12345678901));

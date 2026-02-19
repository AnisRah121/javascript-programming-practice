function customePow(b,p){
    let prod = 1

    for(let i = 1 ; i <=p ; i++){
        prod *=  b;
    }
    return prod
}
console.log(customePow(2))

// function checkPow(){
//     let sqr = customePow()
// }
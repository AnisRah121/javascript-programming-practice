Array.prototype.myPush=function(...args){
    for(let i = 0 ; i< args.length; i++){
        this[this.length] = args[i];
    }
    return this.length
}
let arr = [1,2,3,4,5]

let a = [10,20,30]

console.log('Before Adding :' , a);
let res = a.myPush(60,70,80);
console.log('Result of Method : ', res);
console.log('After Adding :' , a);



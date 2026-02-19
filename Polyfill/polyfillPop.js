// Array.prototype.myPop = function () {
//     let res = this[this.length - 1]
//     if (this.length > 0)
//         this[this.length - 1]
//     return res
// }
// let a = [10, 20, 30, 40]

// console.log('Original Array :', a);
// let res = a.myPop();
// console.log('Result of myPop Method : ', a);
// console.log('return value from value', res);

Array.prototype.pop2 = function () {
    if (this.length >= 2) {
        this.length = this.length - 2
    }
    else {
        this.length = 0
    }

}
let a = [10, 20, 30, 40]

console.log('Original Array :', a);
let res = a.pop2();
console.log('Result of myPop Method : ', a);
console.log('Return value from value', res);

console.log('Length after pop', a.length);





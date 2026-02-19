// SHIFTING

// Array.prototype.myShift = function () {
//     let res = this[0];

//     for (let i = 0; i < this.length - 1; i++) {
//         this[i] = this[i + 1]
//     }
//     if (this.length > 0) {
//         this.length = this.length - 1
//     }
//     return res
// }

// let a = [10, 20, 30];

// console.log('Before using Shift Arr is ', a);

// let res = a.myShift()
// console.log('Array after using Shift Method', a);

//UNSHIFTING

Array.prototype.myUnShift = function (...args) {

    for (let i = this.length - 1; i >= 0; i--) {
        this[i + args.length] = this[i]
    }

    for (let i = 0; i < args.length; i++) {
        this[i] = args[i]
    }
    return this.length

}

let a1 = [10, 20, 30];

console.log('Before using unShift Arr is ', a1);

let res1 = a1.myUnShift(40, 50)
console.log('Array after using unShift Method', a1);



let a = [1, 2, 3, 4]
let res = a.unshift(5)
let res2 = a.unshift(5)
console.log('Length of a',res);
console.log(a);

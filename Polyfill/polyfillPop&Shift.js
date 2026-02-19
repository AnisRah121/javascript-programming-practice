/*
i/p : [10,20,30,40]

o/p : [20,30]


create an method where we have to , remove fist and last element of an array
*/

Array.prototype.removeFirstLast = function () {

    if (this.length <= 2) {
        this.length = 0;
        return this;
    }

    // Shift left to remove first
    for (let i = 1; i < this.length - 1; i++) {
        this[i - 1] = this[i];
        console.log(this[i-1]);
        
    }

    // Reduce length by 2 (first + last)
    this.length = this.length - 2;

    return this;
}




let arr = [10,20,30,40];
arr.removeFirstLast();
console.log(arr); // [20,30]

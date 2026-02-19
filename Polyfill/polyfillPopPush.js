Array.prototype.myPopPush = function (newValue) {

    let arr = this

    //Pop
    arr.length = arr.length - 1;

    // PUSH
    arr[arr.length] = newValue;
};
let arr = [1, 2, 3, 4];

arr.myPopPush(99);
console.log(arr); // [2, 3, 4, 99]

/**
  create an polyfill for reduce 
 */
Array.prototype.myReduce = function (callback, initVal) {

    let arr = this;
    let accumulator;
    let startIndex = 0;

    if (initVal !== undefined) {
        accumulator = initVal
    }
    else {
        accumulator = arr[0];
        startIndex = 1
    }

    for(let i = startIndex ; i < arr.length; i++){
        accumulator = callback(accumulator,arr[i],i,arr)
    }
    return accumulator;

}

let arr = [1,2,3,4];



// Array.prototype.myReduce = function (callback, initialValue) {
//     let arr = this;
//     let accumulator;
//     let startIndex = 0;

//     // If initialValue is provided
//     if (initialValue !== undefined) {
//         accumulator = initialValue;
//     } else {
//         accumulator = arr[0];
//         startIndex = 1;
//     }

//     for (let i = startIndex; i < arr.length; i++) {
//         accumulator = callback(accumulator, arr[i], i, arr);
//     }

//     return accumulator;
// };

// let nums = [1,2,3,4];

// let sum = nums.myReduce((acc, curr) => acc + curr, 0);
// console.log(sum);

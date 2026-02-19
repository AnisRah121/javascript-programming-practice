// find the index of targeted element in an array

let arr = [10, 5, 15, 4, 9, 7]
let target = 15

function findTarget(arr,target) {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}
console.log(findTarget(arr,target));

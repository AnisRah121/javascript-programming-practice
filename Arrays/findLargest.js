
let arr = [2, 7, 5, 4]
function findLargest(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(findLargest(arr));

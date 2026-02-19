let arr = [2, 7, 5, 4];

function findMinMax(arr) {

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if(arr[i]<min) {
            min = arr[i]
        }
    }
    return {min,max}
}
console.log(findMinMax(arr));

let arr = [2, 7, 5, 4];

function revArr(arr) {
    let left = 0; let right = arr.length - 1;
    for (let i = left; i < right; i++) {
        if (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++; right-- ;
        }
    }
    return arr;
}
console.log(revArr(arr));

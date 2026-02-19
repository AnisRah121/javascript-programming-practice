let arr = [1, [2, [3], [4, [5]]], 6, 7];

function flatArr(arr, res=[]) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatArr(arr[i], res)
        }
        else {
            res[res.length] = arr[i]
        }
    }
    return res
}
console.log(flatArr(arr))
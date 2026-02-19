let arr = [2, 7, 5, 4];

function sumofele(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
         sum+=arr[i]
    }
    return sum;
}
console.log(sumofele(arr));

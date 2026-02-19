let arr = [2, 7, 5, 4]

function findSmallest(arr) {
    let smallest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
             smallest = arr[i]
        }
    }
    return smallest
}
console.log(findSmallest(arr));

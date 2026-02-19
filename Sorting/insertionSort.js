function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let ele = arr[i];
        let j = i - 1;

        while (arr[j] > ele && j >= 0) {
            arr[j + 1] = arr[j]; // shift right
            j--;
        }

        arr[j + 1] = ele; // insert element
    }
    return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));

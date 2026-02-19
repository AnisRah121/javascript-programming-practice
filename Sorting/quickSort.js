// let arr = [6, 2, 9, 5, 1, 7, 3];

let arr = ['6', '2', '9', '5', '1',' 7', '3'];

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;   //  Base condition

    let pivot = arr[Math.floor((start + end) / 2)];
    let i = start;
    let j = end;

    while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;

        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];  //Destructing
            i++;
            j--;
        }
    }

    // Recursive calls AFTER partition
    quickSort(arr, start, j);
    quickSort(arr, i, end);
}

quickSort(arr);
console.log(arr);

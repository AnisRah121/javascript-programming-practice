// let arr = [6, 2, 9, 5, 1 ,7, 3];
// let arr = ['6', '2', '9', '5', '1',' 7', '3'];

let arr = ['g', 'f', 'e', 'd', 'c',' b', 'a'];

// Convert once
// arr = arr.map(Number);

arr = arr.map(s=>s.trim());

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;

    let pivot = arr[Math.ceil((start + end) / 2)];
    let i = start;
    let j = end;

    while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;

        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    quickSort(arr, start, j);
    quickSort(arr, i, end);
}

quickSort(arr);
console.log(arr);

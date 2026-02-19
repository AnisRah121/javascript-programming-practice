  
let arr = [8, 5, 1, 3, 7, 2, 4];

function sort(arr) {
    if (arr.length <= 1) return;

    let left = [];
    let right = [];

    for (let i = 0; i < Math.trunc(arr.length / 2); i++) {
        left[i] = arr[i];
    }
    for (let i = Math.trunc(arr.length / 2); i < arr.length; i++) {
        right[right.length] = arr[i]; // polyfill method 
    } 

    sort(left);
    sort(right);
    Merge(arr, left, right);
}

function Merge(arr, l, r) {
    let i = 0, j = 0, k = 0;

    while (i < l.length && j < r.length) {
        if (l[i] < r[j]) {
            arr[k++] = l[i++];
        } else {
            arr[k++] = r[j++];
        }
    }

    while (i < l.length) {
        arr[k++] = l[i++];
    }
    while (j < r.length) {
        arr[k++] = r[j++];
    }
}

sort(arr);
console.log(arr);


function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let ind = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[ind]) {
                ind = j
            }
        }
        if (i != ind) {
            [arr[i], arr[ind]] = [arr[ind], arr[i]]
        }
    }
    return arr
}

console.log(selectionSort([5,8,4,9,1]));
/*
ele     index
----    -----
5    -->  0 <= i
8    -->  1 <= j
4    -->  2 
9    -->  3
1    -->  4



*/
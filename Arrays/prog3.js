let arr = [1, 2, 3, 4, 5]

function reverseArr(arr) {

    let i = 0;
    let j = arr.length - 1

    while (i < j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++;j--
    }
    return arr
}

console.log(reverseArr(arr));


// let arr = [1, 2, 3, 4, 5]

// function reverseArr(arr) {

//     let i = 0;
//     let j = arr.length - 1

//     for (let i = 0; i < arr.length; i++) {
//         if (i < j) {
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//         i++;
//         j--
//     }
//     return arr
// }

// console.log(reverseArr(arr));








/*


function reverseArray(arr) {
    let firstPointer = 0; 
    let lastPointer = arr.length - 1; 

    for (let i = 0; i < arr.length; i++) {
        if (firstPointer < lastPointer) {
            let temp = arr[firstPointer]; 
            arr[firstPointer] = arr[lastPointer]; 
            arr[lastPointer] = temp; 
        }
        firstPointer++;
        lastPointer--;
    }
    return arr;
}
console.log(reverseArray(arr))
 */
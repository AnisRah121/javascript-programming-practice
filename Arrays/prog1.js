// /* create function to count occurence of elements in array

// i/p : [10,1,5,1,10,6]

// */

// function countOccurrences(arr) {
//     for (let i = 0; i < arr.length; i++) {

//         let count = 0;

//         // Check if this element was already counted before
//         let alreadyCounted = false;
//         for (let k = 0; k < i; k++) {
//             if (arr[k] === arr[i]) {
//                 alreadyCounted = true;
//                 break;
//             }
//         }

//         if (alreadyCounted) continue;

//         // Count occurrences
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }

//         console.log(arr[i] + " occurs " + count + " times");
//     }
// }

// countOccurrences([10,1,5,1,10,6]);



function countOccurrences(arr) {
    const freq = {};

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (freq[element]) {
            freq[element] += 1;   // already exists → increase count
        } else {
            freq[element] = 1;    // first time seen
        }
    }

    return freq;
}

console.log(countOccurrences([10,1,5,1,10,6]));



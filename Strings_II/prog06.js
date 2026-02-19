//Create function that Count the number of Capital letter in given string.
 let count = 0;
function countSmallLetters(str) {
    // let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            count++;
        }
    }

    return count;
}

let str = 'AbCdEfGhIjK';
console.log(countSmallLetters(str)); // 6

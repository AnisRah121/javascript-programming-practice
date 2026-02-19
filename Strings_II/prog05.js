//Create function that Count the number of Capital letter in given string.

function countCapitalLetters(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            count++;
        }
    }

    return count;
}

let str = 'AbCdEfGhIjK';
console.log(countCapitalLetters(str)); // 6

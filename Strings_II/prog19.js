function reverseCharacter(str) {
    let res = '';
    let k = 0; // word start index

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === ' ' || i === str.length) {
            let j = i - 1;

            while (j >= k) {
                res += str[j];
                j--;
            }

            if (i !== str.length) {
                res += ' ';
            }
            k = i + 1;
        }
    }
    return res;
}

let str = 'JS IS VERY FAST LANGUAGE';
console.log(reverseCharacter(str));

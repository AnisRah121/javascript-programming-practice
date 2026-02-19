
const input = [10,1,5,1,10,6];

function removeDuplicate(arr) {
    const result = [];
    const map = {};

    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
            result[result.length] = arr[i];
            
        } 
    }
    return result;
}

console.log(removeDuplicate(input));
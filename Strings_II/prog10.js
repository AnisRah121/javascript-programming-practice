let str = 'racecar'

function stringPalindrome(str) {
    let res = ''
    for (let i = str.length-1; i >= 0; i--) {
        res += str[i]
    }
    if(res === str){
        return true
    }
    return false
}
console.log(stringPalindrome(str));


let str = 'JsP_@12xyz'

let Caps = 0
let Small = 0
let Special = 0

function checkLetters(str) {

    for(let i = 0 ; i<= str.length;i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            Caps++
        }
        if(str[i] >= 'a' && str[i]<= 'z'){
            Small++
        }
    }
    return [Caps,Small]
}

console.log(checkLetters(str));
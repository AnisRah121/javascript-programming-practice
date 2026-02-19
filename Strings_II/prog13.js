let str = 'Jsp@123'

function check(str) {

    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            sum += +(str[i]); 
            
        }
    }
    return sum;
}
console.log(check(str));


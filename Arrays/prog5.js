let arr = [10, 20, 10, 30, 20, 40]

let res = arr.reduce((acc, ele, i, arr) => {
    if (acc[ele]) {
        acc[ele]++
    }
    else {
        acc[ele] = 1
    } 
    return acc
}, {})
console.log(res);


// let arr = [10,20,10,30,20,40]

// let res = arr.reduce((acc,ele,i, arr)=>{
//     // return acc+ele
// },0)
// console.log(res);

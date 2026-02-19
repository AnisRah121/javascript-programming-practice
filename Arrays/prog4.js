//create a function inside map , that reverse the array ? how

let arr = [10, 20, 30, 40, 50]

let res = arr.map( (ele,i,a)=> arr[arr.length-1-i])

console.log(res);

//[ 50, 40, 30, 20, 10 ]
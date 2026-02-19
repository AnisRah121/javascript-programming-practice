/*
    *
   *
  *
 *
*
*/


function patter6(n) {


    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i + j === n - 1)
               str += '*';
            else str += ' ';
        }
        str += '\n';
    }
    console.log(str);

}
console.log(patter6(5));

/**
 
function leftDiagonal(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) str += '*';
      else str += ' ';
    }
    str += '\n';
  }
  console.log(str);
}

leftDiagonal(5);

 */
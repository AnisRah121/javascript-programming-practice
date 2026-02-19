Array.prototype.myShiftPush = function(newValue) {

  // STEP 1: SHIFT (left shift)
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }

  // remove last duplicate
  this.length = this.length - 1;

  // STEP 2: PUSH
  this[this.length] = newValue;
};


const arr = [1, 2, 3, 4];

arr.myShiftPush(99);

console.log(arr);


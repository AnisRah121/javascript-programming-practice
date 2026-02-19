Array.prototype.myShiftUnshift = function(newValue) {
  // SHIFT
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  this.length = this.length - 1;
  // UNSHIFT
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = newValue;
  this.length = this.length + 1;
};

let arr4 = [1, 2, 3, 4];

arr4.myShiftUnshift(99);
console.log(arr4);

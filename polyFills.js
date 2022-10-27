const nums = [1, 2, 3, 4, 5, 6];

const numsThree = nums.map((num, i, arr) => {
  return num * 3;
});

// console.log(numsThree);

//==============================
//Polyfill for map

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const myNumsThree = nums.myMap((num, i, arr) => num * 3);

// console.log(myNumsThree);

//==================================================
//Polyfill for filter

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const numsFilter = nums.myFilter((num, i, arr) => {
  return num % 2 === 0;
});

// console.log(numsFilter);

//=======================================
//Polyfill for reduce

// nums.reduce((acc, curr, i ,arr) => {}, initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const reduceNums = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

// console.log(reduceNums);

//===========================================================
//Difference between map and for Each
//=====================================================
//MAP ==> (1) returns a new array
//         (2) we can chain other array methods to map

//forEach ==> (1) doesnot return a new array. It modifies the original array.
//              (2) cannot chain other array methods to it because it doesnot return anything.
//===========================================================================================

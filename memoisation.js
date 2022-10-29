//memozation code

const add = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoise = (fun) => {
  let cache = {};
  return function (...args) {
    let i = args[0];
    if (i in cache) {
      console.log("reading from cache");
      return cache[i];
    } else {
      console.log("computing value first time");
      let result = fun(i);
      cache[i] = result;
      return result;
    }
  };
};

// const addEfficient = memoise(add);
// console.time();
// console.log(addEfficient(5));
// console.timeEnd();

// console.time();
// console.log(addEfficient(5));
// console.timeEnd();

//===================================================
//better memoised function

const memoisedFn = function (fn) {
  let cache = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!cache[argsCache]) {
      cache[argsCache] = fn.call(this, ...args);
    }
    return cache[argsCache];
  };
};

const product = (num1, num2) => {
  for (let i = 0; i < 10000000; i++) {}

  return num1 * num2;
};

const memoisedProduct = memoisedFn(product);
console.time();
console.log(memoisedProduct(5899, 4556));
console.timeEnd();

console.time();
console.log(memoisedProduct(5899, 4556));
console.timeEnd();

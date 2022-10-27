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

const addEfficient = memoise(add);
console.time();
console.log(addEfficient(5));
console.timeEnd();

console.time();
console.log(addEfficient(5));
console.timeEnd();

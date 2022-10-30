//Currying is an advanced technique of working with functions.
//It’s used not only in JavaScript, but in other languages as well.

//Currying is a transformation of functions that translates a
//function from callable as f(a, b, c) into callable as f(a)(b)(c).

//normal function

// function f(a, b){
//         console.log(a,b)
// }

//currying fn

function f(a) {
  return function (b) {
    console.log(a, b);
  };
}

// f(5)(6);

//==============================
//ques 1

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(sum(4)(2)(3));

//==================================
// ques 2
//create a fn evaluate. based on the operation, we evaluate.

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "add") {
        return a + b;
      } else if (operation === "multiply") {
        return a * b;
      } else if (operation === "subtract") {
        return a - b;
      } else if (operation === "divide") {
        return a / b;
      } else return "No valid operation provided";
    };
  };
}

// console.log(evaluate("add")(2)(2));

//================================================
//INFINITE CURRYING

function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

// console.log(sum(1)(2)(3)(4)(5)());

//===========================================
//currying vs partial application

//Partial application transforms a
//function into another function with smaller arity.==> number of arguments a function receives

function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

// console.log(sum(1)(2,3));

//===========================================================
//How to manipulate DOM by using currying?

function manipulateDom(id) {
  return function (content) {
    document.getElementById(id).textContent = content;
  };
}

const changeContent = manipulateDom("currying");

// changeContent("my name is Pratyaksh Singh");

//====================================================
//CURRY IMPLEMENTATION
//fn that converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFn(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFn(...args, ...next);
      };
    }
  };
}

const sumNums = (a, b, c, d, e) => a + b + c + d;

const totalSum = curry(sumNums);
// console.log(totalSum(1)(2)(3)(4)(5));

//Def ==> A fun has access to the variable environment of the execution context where it was created.
// ==> variable environment attached to the fn exactly as it was at the time and place the function was created.

//MDN def ==>
//A closure is the combination of a function bundled together
//(enclosed) with references to its surrounding state (the lexical environment).
//In other words, a closure gives you access to an outer function's
//scope from an inner function. In JavaScript, closures are created
//every time a function is created, at function creation time.

//eg

const g = function () {
  const a = 23;
  function f() {
    //f is a closure
    console.log(a * 2);
  }
  return f;
};

// const functionF = g();
// functionF();

//what is lexical scope
// ==> lexical scope is the placement of the variables and functions in the code
// a variable declared inside a function cannot be accessed outside the function
//but a variable defined outside the scope of a func can be accessed inside the function

//===================================================
//CLOSURE SCOPE CHAIN

// Every closure has three scopes:

// 1.Local scope (Own scope)
// 2.Enclosing scope (can be block, function, or module scope)
// 3.Global scope

// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // log 20

//===================================
//ques 1
//output
// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1; //shadowing
//     console.log(count); //1
//   }
//   console.log(count);//0
// })();

//=========================
//ques 2

function createBase(num) {
  return function (x) {
    console.log(num + x);
  };
}

const addSix = createBase(6);

// addSix(10);
// addSix(15);

//======================================
//ques 3
//OPTIMISE the code

// function find() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   return function (index) {
//     console.log(a[index]);
//   };
// }
// const closure = find();
// console.time("50");
// closure(50);
// console.timeEnd("50");

//=================================
//ques 4

//the func assigned to setTimeout is closure. three closures have been created
//by the loop but each one shares the same lexical environment
// which has i with changing values.

// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// a(); // 3 3 3

//what if you have to use var then how will you solve it.
//ans ==> use more closures

function aClosures() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }

    inner(i);
  }
}

// aClosures();

//=========================================================
//ques 5 ==> how would you use closure to create a private counter?

// function counter() {
//   let _counter = 0;

//   function add(value) {
//     return (_counter += value);
//   }
//   function subtract(value) {
//     return (_counter -= value);
//   }
//   function retrieve() {
//     return _counter;
//   }

//   return {
//     add,
//     subtract,
//     retrieve,
//   };
// }

// const c = counter();

// c.add(5);
// console.log(c.retrieve());

//=====================================
//ques ==> what is module pattern?
// ans ==> we can emulate private methods with closures in a module design pattern

// const counter = (function () {
//   //IIFE
//   let privateCounter = 0;
//   function changeBy(val) {
//     //private function
//     privateCounter += val;
//   }

//   return {
//     increment() {
//       //public function
//       changeBy(1);
//     },

//     decrement() {
//       changeBy(-1);
//     },

//     value() {
//       return privateCounter;
//     },
//   };
// })();

// console.log(counter.value()); // 0.

// counter.increment();
// counter.increment();
// console.log(counter.value()); // 2.

// counter.decrement();
// console.log(counter.value()); // 1.

//==================================================
//make this run only once

let view;
const subscribe = function () {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("already printed");
    } else {
      view = "Pratyaksh Singh";
      console.log(`my name is ${view}`);
      called++;
    }
  };
};

// let calledOnce = subscribe();
// calledOnce();
// calledOnce();
// calledOnce();
// calledOnce();

//==============================
//difference between closure and scope
//when we define a function and return a function inside that function then
//the inner function is a closure whereas
// scope in JS tells us what variable you have access to.
//there are two types of scopes global and local

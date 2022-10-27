// const arr = [1, 2, 3, 4, 5, 6];

// // console.log(...arr);

// function add(...args) {
//   const initialValue = 10;
//   const result = args.reduce(
//     (prevValue, currValue) => prevValue + currValue,
//     initialValue
//   );
//   console.log(result);
// }

// add(...arr);

// || operator

// console.log(false || false || true || undefined);

//&& operator

// console.log(1 && 2 && 3 && 4);

// const me = {
//   firstName: "Pratyaksh",
//   lastName: "Singh",
//   introduce: function (age) {
//     console.log(
//       `My name is ${this.firstName} ${this.lastName}. I am ${age} years old.`
//     );
//   },
// };

// me.introduce(26);

// const brother = {
//   firstName: "Praroop",
//   lastName: "Singh",
// };

// me.introduce.call(brother, 21);
//me.introduce.apply(brother, [21]);
// const introduceBrother = me.introduce.bind(brother);
// introduceBrother(21);

//==============================

//closures

// let f;

// function g() {
//   const a = 23;
//   console.log(`g called`);
//   f = function () {
//     console.log(a);
//     console.log(a * 2);
//     console.log(`f called`);
//   };
//   return f;
// }

// const innerFn = g();
// innerFn();

//=================================

//map

// const arr = [2, 2, 2, 2, 2, 2, 2, 8, 9];

// console.log(arr.map((a) => a * 2));

//filter

// console.log(arr.filter((a) => a % 2 === 0));

//reduce

// console.log(arr.reduce((prev, curr) => prev + curr, 0));

//find

// console.log(arr.find((a) => a % 2 !== 0));

//some

// console.log(arr.some((a) => a % 2 !== 0));

//every

// console.log(arr.every((a) => a % 2 === 0));

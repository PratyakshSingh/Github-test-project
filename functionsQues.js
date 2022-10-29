//==============================
//Ques 1

//value of x will be "undefined" because when the fn func is called then
//x is initialised in the local scope of the func.
var x = 21;

var func = function () {
  console.log(x);
  var x = 20;
};
//when we have a variable in our current scope then
//we will not look into the parent scope even if the value is undefined

// func();

//===================================================
//Ques 2

// using var ==> var is function scoped so it will produce value 5 five times
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// using let ==> let is block scoped so
//it will create a block at every iteration and we will get 0 ,1,2,3,4
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

//===========================================
//Ques 3
function sum(num) {
  // this is params
  console.log(num * num);
}
//  sum(5)// this is argument

//==============================================
//ques 4

//this will give error because rest parameter must be the last formal parameter
// const func2 = (a, ...nums, x,y)=> {
//     console.log(x, y);
// }
// func(2,3,4,5);

//========================================
//ques 5 ==> what is a callback function
//A callback function is a function passed into another function as an argument, which is then
//invoked inside the outer function to complete some kind of routine or action.
//examples of callback fns ==> map, reduce, filter, event listeners, etc.

//==========================================
//ques 6 ==> differences between arrow fns and normal function
// 1. syntax
// 2. this keyword cannot be used in arrow functions
//3. arrow functions do not have the arguments keyword

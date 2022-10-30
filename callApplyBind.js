//Call, bind and Apply are three super important JavaScript
//methods that are available to all JavaScript functions,
// which are used to set the this keyword independent of how the
//function is called. You can use these methods to tie a function into an object
//and call the function as if it belonged to that object.

//what is CALL, APPLY and BIND?
//all three are function borrowing methods. they can be used to explicitly
//set the this keyword to the desired object and call the fn
//as if the fn belongs to the object

function sayHello(greeting, status) {
  return "Hello " + this.name + " " + greeting + " " + status;
}

var obj = { name: "Piyush" };

//call
// console.log(sayHello.call(obj, "how are you", "I am good"));
//apply
// console.log(sayHello.apply(obj, ["how are you", "I am good"]));

//bind
const objBind = sayHello.bind(obj);
// console.log(objBind("how are you", "I am good"));

//============================================================
//output question

var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };

  //   console.log(data.getStatus()); //---1==> 🥑
  //   console.log(data.getStatus.call(this)); //---2 ==> 😎
}, 0);

//We declared the setTimeout function on the global object,
//so within the setTimeout function, the this keyword refers
//to the global object. On the global object, there is a
//variable called status with the
//value of "😎". When logging this.status, "😎" gets logged.

//==========================================================
//output ques

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}
//answer ==>
// for (let i = 0; i < animals.length; i++) {
//   printAnimals.call(animals[i], i);
// }

//========================================================
//==> append an array to another array

const array = ["a", "b"];
const elements = [0, 1, 2];
//solution
array.push.apply(array, elements);
// console.log(array);

//=======================================================
//USE APPLY TO ENHANCE SOME BUILT-IN FUNCTIONS
//FIND MIN/MAX NUMBER IN AN ARRAY
const numbers = [5, 6, 2, 3, 7];

let max = Math.max.apply(null, numbers); // equal to Math.max

let min = Math.min.apply(null, numbers); // equal to Math.min

//========================================================
//Create a bound function
//this is a bound function i.e.,the context is hard fixed.
//

function f() {
  console.log(this); // window object
}

let user = {
  g: f.bind(null),
};

// console.log(user.g); //window object

//============================================================
//output ==> bind chaining

function f() {
  console.log(this.name);
}

f = f.bind({ name: "Pratyaksh" }).bind({ name: "Shubham" });

// f(); // Pratyaksh
//BIND CHAINING doesnot exist. if a fn is bound to some object
//then it will be bound to that object.

//========================================================
//output

function checkPassword(success, failed) {
  let password = prompt("Password", "");
  if (password === String(1234)) success();
  else failed();
}

let user1 = {
  name: "Pratyaksh",
  loginSuccess: function () {
    console.log(`${this.name} logged in`);
  },
  loginFail: function () {
    console.log(`${this.name} failed to log in`);
  },
};

// checkPassword(user1.loginSuccess.bind(user1), user1.loginFail.bind(user1));
//==>when we call checkPassword then the this keyword in loginSuccess and login fail point
//to the global object.

//========================================================

const age = 10;

var person = {
  name: "pratyaksh",
  age: 24,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age);
  },
};

const person2 = { name: "shubham", age: 26 };

// person.getAge.call(person2);//26
// person.getAgeArrow.call(person2);// undefined

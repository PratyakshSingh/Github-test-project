// this keyword inside a object(both arrow and normal function)

// const user = {
//   name: "Pratyaksh",
//   age: 26,
//   getDetails: () => {
//     console.log(this.name, this.age);
//   },
//   getDetails() { //this will not give error and returns the value
//     console.log(this.name, this.age);
//   },
// };

// user.getDetails(); //undefined
//this happened because this keyword inside a arrow fn always
//points to the outer scope object.

//================================================

// const user1 = {
//   name: "Pratyaksh",
//   age: 26,
//   childObj: {
//     newName: "Shubham",
//     getDetails() {
//       console.log(this.newName, this.name);
//     },
//   },
// };

// user1.childObj.getDetails(); //Shubham and undefined
//how to get correct result

//===================================================

//"this" keyword inside a class
// this keyword points to the object being created using the class.

//============================================
//output question

// const user = {
//   firstName: "Pratyaksh",
//   getName: function () {
//     const firstName = "Shubham";
//     return this.firstName;
//   },
// };
// console.log(user.getName()); //Pratyaksh
//this is because the method getName is returning
//this.firstName and this points to
// user and user.firstName == "Pratyaksh"

//=============================================
//question ==> what is the result of accessing its ref?

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user1 = makeUser(); // no result ==> empty
// console.log(user1.ref.name);
//user1 ==> {name: "John", ref: Window}
//user1.ref.name ==> user1.Window.name ==> doesnot exist

//how to fix it?
// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }

// const user = makeUser();
// console.log(user.ref().name);
//THIS IS SAME AS CALLING USER.NAME

//========================================================
//output question

// const user = {
//   name: "Pratyaksh Singh",
//   logMessage() {
//     console.log(this.name); // What is logged?
//   },
// };

// setTimeout(user.logMessage, 1000); // nothing will be printed}

// setTimeout(function () {
//   user.logMessage();
// }, 1000); // Pratyaksh Singh

// this happened because setTimeout take user.logMessage as a callback
//and thus the func is copied there and thus this points to window object wihch
//doesnot have name property

//======================================================
//create a calculator object

// let calculator = {
//   read() {
//     this.a = +prompt("a =", 0);
//     this.b = +prompt("b =", 0);
//   },

//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read(); //reads from the user
// console.log(calculator.sum());
// console.log(calculator.mul());

//========================================================
//output ques

// var length = 4;

// function callback() {
//   console.log(this.length); // What is logged?
// }

// const object = {
//   length: 5,
//   method(callback) {
//     callback(); //regular fn call so will output 4
//   },
// };
// object.method(callback, 1, 2);

//==========================================================
//output question

// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
// const object = {
//   length: 5,
//   method() {
//     // arguments = [callback, 1,2]
//     arguments[0]();
//   },
// };
// object.method(callback, 1, 2); //3
//arguments is an array. when we call arguments[0]()==> callback,
// it will target its parent object which is arguments. so this.length ==> arguments.length.
//so output is 3

//========================================================
//implement cal()

const calc = {
  total: 0,
  add(num) {
    this.total += num;
    return this;
  },
  multiply(num) {
    this.total *= num;
    return this;
  },
  subtract(num) {
    this.total -= num;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total); //---- What is logged?

//object in js

//==================================
//ques 1 ==> using delete keyword
//delete keyword can only be used to delete a property from a object.
//here "a" is a local variable so delete keyword will not delete it.

const func = (function (a) {
  delete a;
  return a;
})(5);

// console.log(func);

//===============================================
//how to set and use multi word keys in a object like "like this video"?
// ==> we can use the double quotes to set it and use [""] to access it.

const user = {
  name: "Pratyaksh Singh",
  age: 26,
  "like the user": true,
};

// console.log(user["like the user"]);

//=============================================
//computed properties

let property = "name";
// let value = "Pratyaksh";

// const user1 = {
//   [property]: value,
// };

// console.log(user1[property]);
// console.log(user1.name);

//====================================================
//square bracket notation can be used for unknown and complex
//key names and dot notation is used for known and simple keys.
//=====================================================

//===================================================
//how to access keys in an objects

let user2 = {
  name: "Piyush",
  age: 24,
};

// for (let key in user2) {
//   console.log(key); // name, age
//   console.log(user2[key]); // Piyush, 24
// }

//===============================
//ques

const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);

//ans will be {a: "three", b: "two"} ==> because the object will take the last specified value of the same property.

//======================================
//question

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

const multiplyByTwo = (obj) => {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
};

multiplyByTwo(nums);

// console.log(nums);

//======================================================
//ques 3
//what is the output of this code?
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

//console.log(a[b]); //456
//==> REASON ==> Object keys are automatically converted
//into strings. We are trying to set an object as a key
//to object a, with the value of 123.
//However, when we stringify an object, it becomes
//"[object Object]". So what we are saying here,
//is that a["[object Object]"] = 123. Then, we can
//try to do the same again. c is another object that
//we are implicitly stringifying. So then,
//a["[object Object]"] = 456.
//Then, we log a[b], which is actually
//a["[object Object]"]. We just set that to 456,
//so it returns 456.

//==========================================================
//ques 4 ==> What is JSON>stringify and JSON.parse?
//==> JSON.stringify ==> converts a object into a string
// ==> JSON.parse ==> converts a string into a object

const userObj = {
  name: "Pratyaksh",
  age: 26,
};

const strObj = JSON.stringify(userObj);
// console.log(strObj);
// console.log(JSON.parse(strObj));

// ==> WHAT IS THE Y+USE OF JSON.parse and JSON.stringify?
//==> it can be used to store items in localstorage because
// localstorage can only store items as strings if we try to store
//objects it will forcefully try to convert them to strings
// which will give us "[object Object]"

//==========================================================
//ques 5
// output

console.log([..."Pratyaksh"]); //['P', 'r', 'a', 't', 'y', 'a', 'k', 's', 'h']
// it will spread all the characters and give output as shown

//=====================================
//output?
const settings = {
  username: "Pratyaksh",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data); // "{"level":19, "health":90}"
//==> it will only stringify the give keys in the array

//==========================================
//output

const shape = {
  radius: 10,
  diameter() {
    //normal fn
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius, //arrow fn
};

// console.log(shape.diameter()); //20
// console.log(shape.perimeter()); //NaN

//due to the arrow fn we cannot use this here because for arrow fns this keyword points to the surrounding object
//(which is global object) that doesnot contain the property radius

//============================================
//Object referencing questions

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting); //Hello
//In JavaScript, all objects interact by reference
//"when setting them equal to each other".
//When you change one object, you change all of them.

//================================================
//output??

console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false

//Objects are compared based on references.

//In the above statement, we are comparing two different
//objects so their references will be different. Hence,
//we get the output as false for both of the statements.

//==================================================
//output??

let person = { name: "Lydia" };
const members = [person]; // [{ name: 'Lydia' }]
person = null;

// console.log(members);

// person =====>(points to) ==> { name: 'Lydia' }
// members =====> [ ==> { name: 'Lydia' }]
//now person =====> (points to) ===> null
//so we can see that person points to null but members array still holds the
//same reference.

//==================================================
//output??

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); //20
multiply(); //20
multiply(value); //20
multiply(value); //40

//for the first and second case , it will take the default value because
// we are not providing anything as params. So when we spread properties of{...value}
// into a new object and then we do the operation in the fn.
// but in 3 and 4 cases, when we do multiply(value), then we reference
// the value object and then the object gets modified after 3rd operation
// and then the 4th operation is done on the modified value.

//==============================================
//output??

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };

  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> { name: "Alex", age: 25 }
console.log(personObj2); // -> { name: "John", age: 50}

//====================================================
//what is shallow copy and deep copy of an object?

//==> A shallow copy means that certain (sub-)values are still
//connected to the original variable.
//EXAMPLE of SHALLOW COPY

// const user={
//     name: 'Jen',
//     age: 26
// };

// const copyOfUser =user;
// console.log(user, 'user'); //{ name: 'Jen', age: 26 } user

// console.log('------------After Modification-----------');
// copyOfUser.age = 24;
// /*
// Here you would expect user object wouldn't change, but copyOfUser
// and user object both share same memory address
// */
// console.log(user, 'user');// ------------After Modification-----------
// { name: 'Jen', age: 24 } user

//==>A deep copy means that all of the values of the new variable are copied
//and disconnected from the original variable

//EXAMPLE OF DEEP COPY / CLONE
// 3 ways to do it
// const user = {
//     name: "Jen",
//     age: 26
// }
// console.log("=========Deep Copy========");
// const copyOfUser = JSON.parse(JSON.stringify(user));
//const copyOfUser = {...user };
//const copyOfUser = Object.assign({}, user)
// console.log("User=> ",user);
// console.log("copyOfUser=> ", copyOfUser);
/*
=========Deep Copy========
User=>  { name: 'Jen', age: 26 }
copyOfUser=>  { name: 'Jen', age: 26 }
// */
// console.log("---------After modification---------");
// copyOfUser.name = "Piyush";
// copyOfUser.age = 24;
/*
Here user object will not change
// */
// console.log("User=> ",user);
// console.log("copyOfUser=> ",copyOfUser);
/*
---------After modification---------
user=>  { name: 'Jen', age: 26 }
copyOfUser=>  { name: 'Piyush', age: 24 }
*/

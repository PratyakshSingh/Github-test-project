//INHERTANCE BETWEEN CLASSES
//=====================================
//(1)CONSTRUCTOR FUNCTIONS

//constructor function of Person
// const Person = function (fName, age) {
//   this.fName = fName;
//   this.age = age;
// };

// //adding a function to prototype of Person
// Person.prototype.calcAge = function () {
//   console.log(`Age of ${this.fName} is ${this.age}`);
// };

// //constructor function of Student
// const Student = function (fName, birthYr, course) {
//     //setting the this keyword for this function call to the object created from this constructor function
//   Person.call(this, fName, birthYr);
//   this.course = course;
// };

// //manualy creating a connection between Person and Student
// Student.prototype = Object.create(Person.prototype);

// const student1 = new Student("Pratyaksh", 26, "B.Tech");

// student1.calcAge();

//========================================================================
//(2) ES6 Classes

class PersonCL {
  constructor(fName, age) {
    this.fName = fName;
    this.age = age;
  }
  introduce() {
    console.log(`Hi. My name is ${this.fName}. I am ${this.age} years old.`);
  }
}

class StudentCL extends PersonCL {
  constructor(fName, age, course) {
    super(fName, age);
    this.course = course;
  }
  sayHi() {
    console.log(`I am ${this.fName}. I am a student of ${this.course}`);
  }
}

const student1 = new StudentCL("Pratyaksh Singh", 26, "Computer Science");

student1.introduce();
student1.sayHi();

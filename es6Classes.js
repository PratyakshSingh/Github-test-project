class PersonCL {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static details() {
    console.log(`every person is unique`);
  }
  introduce() {
    console.log(`hi!!. ${this.firstName}`);
  }
  get name() {
    return this.firstName.toUpperCase();
  }
  set name(fname) {
    this.firstName = fname;
  }
}

const person1 = new PersonCL("Pratyaksh", "Singh");

// console.log(person1);

// console.log(person1.name);

// person1.name = "Shubham";
// console.log(person1.name);

// PersonCL.details();

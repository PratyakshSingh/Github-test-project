//The Promise object represents the eventual completion (or failure)
//of an asynchronous operation and its resulting value.
//Basically it allows you to add handlers with an
//asynchronous action's eventual success value or failure.

//use of callbacks
// function printMessage(userName, cb) {
//   setTimeout(() => {
//     cb(userName);
//   }, 1000);
// }

//CALLBACK HELL
// const message = printMessage("Pratyaksh", function (message) {
//   console.log(message);
//   printMessage("Pratyaksh", function (message) {
//     console.log(message);
//     printMessage("Pratyaksh", function (message) {
//       console.log(message);
//       printMessage("Pratyaksh", function (message) {
//         console.log(message);
//       });
//     });
//   });
// });

//Promise

const me = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("My name is Pratyaksh");
    else reject(`Error found`);
  }, 2000);
});

// console.log(me);
// me.then((res) => console.log(res)).catch((err) => console.log(err));
// console.log(me);

//======================================================
//make use of promise to solve this callback hell issue
//use of callbacks
// function printMessage(userName, cb) {
//   setTimeout(() => {
//     cb(userName);
//   }, 1000);
// }

function printMessage(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userName);
    }, 3000);
  });
}

function printMessage1(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userName + "is going to get a good job");
    }, 2000);
  });
}

function printMessage2(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = true;
      if (result) {
        resolve(userName + "is going to make himself and his family proud");
      } else {
        reject("He will do it no matter what");
      }
    }, 1000);
  });
}

//This is ok but it is also somewhat same as a callback hell
// printMessage("Pratyaksh").then((res) => {
//   console.log(res);
//   printMessage1("Pratyaksh").then((res) => {
//     console.log(res);
//     printMessage2("Pratyaksh").then((res) => {
//       console.log(res);
//     });
//   });
// });

//Another approach
//here when a promise is resolved apart from printing the message
// we also return a new promise then apply then condition on that returned promise

//THIS CONCEPT IS CALLED AS PROMISE CHAINING BECAUSE WE ARE CHAINING
//PROMISES HERE AFTER RETURNING A NEW PROMISE
// printMessage("Pratyaksh")
//   .then((res) => {
//     console.log(res);
//     return printMessage1("Pratyaksh");
//   })
//   .then((res) => {
//     console.log(res);
//     return printMessage2("Pratyaksh");
//   })
//   .then((res) => {
//     console.log(res);
//   });

//======================================================
//Promise COMBINATORS

//Promise.all
//this runs all promises in parallel.It receives an array of promises
//and returns the data if all the promises are fulfilled
//if one of the promises fails, then the promise rejects
// Promise.all([
//   printMessage("Pratyaksh"),
//   printMessage1("Pratyaksh"),
//   printMessage2("Pratyaksh"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//=========================================================
//Promise.race()
//receives an array of promises and returns a promise
//this returned promise is resolved as soon as one
//of the promises settles(resolves or rejects)

// Promise.race([
//   printMessage("Pratyaksh"),
//   printMessage1("Pratyaksh"),
//   printMessage2("Pratyaksh"),
// ]).then((res) => {
//   console.log(res);
// });

//==========================================================
//Promise.allSettled
// takes an array of promises and returns array of all
//settled promises(rejected or fulfilled) promises.

// Promise.allSettled([
//   printMessage("Pratyaksh"),
//   printMessage1("Pratyaksh"),
//   printMessage2("Pratyaksh"),
// ]).then((res) => {
//   console.log(res);
// });

//=========================================================
//Promise.any()
//takes an arr of promises and returns FIRST fulfilled
//promise.rejected are ignored

// Promise.any([
//   printMessage("Pratyaksh"),
//   printMessage1("Pratyaksh"),
//   printMessage2("Pratyaksh"),
// ]).then((res) => {
//   console.log(res);
// });

//=========================================================
//ASYNC/ AWAIT
//we handle errors in async await using try catch block

// const result = async () => {
//   const message1 = await printMessage("Pratyaksh");
//   console.log(message1);
//   const message2 = await printMessage1("Pratyaksh");
//   console.log(message2);
// };

// result();

//==========================================================
//output question 1

// console.log("start");

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise.then((res) => console.log(res));

// console.log("end");

//start
//1
//end
//2
//==> it will print 1 before "end" because when u initialise a
//promise then all the synchronous code inside it will
//run first and then the the asynchronous code will run

//==========================================================
// output ques 2

// console.log("start");

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promise.then((res) => console.log(res));

// console.log("end");

//start
//1
//2
//end
//2
//==> all synchronous code runs first(even inside promise) then the async code runs

//IMP POINT

//if inside a promise there is no resolve or reject then the
// .then and .catch block will not even run.

//===========================================================
//output ques 3

// console.log("start");

// const fn = () => {
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//   });
// };

// console.log("middle");

// fn().then((res) => console.log(res));

// console.log("end");

//o/p
//start
//middle
//1
//end
//Success
//Here fn is being called after middle so when the fn is called then
//only it prints 1

//=======================================================
//output ques 4

// const job = () => {
//   return new Promise((resolve, reject) => {
//     reject();
//   });
// };

// const promise = job();

// promise
//   .then((res) => console.log(1))
//   .then((res) => console.log(2))
//   .then((res) => console.log(3))
//   .catch((err) => console.log("error"))
//   .then((res) => console.log(4));

//output will be it will go to catch block and print the "error"
//and then it will go in the .then block below it and print 4

//========================================================
//output ques 5

const job = (state) => {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("Success");
    } else {
      reject("Error");
    }
  });
};

// const promise = job(true);

// promise
//   .then((res) => {
//     console.log(res);
//     return job(false);
//   })
//   .catch((err) => {
//     console.log(err);
//     return "Error Caught";
//   })
//   .then((res) => {
//     console.log(res);
//     return job(true);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//output ==>
//Success
//Error
//Error caught

//=========================================================
//output ques 6

// const promise = job(true);

// promise
//   .then((data) => {
//     console.log(data); //success
//     return Error("error");
//   })
//   .then((data) => {
//     console.log(data);
//     return job(true);
//   })
//   .catch((err) => {
//     console.log(err); //Error
//     return "Error Caught";
//   })
//   .then((res) => {
//     console.log(res); //Error caught
//     return new Error("test");
//   })
//   .then((res) => {
//     console.log(res.message); //test
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//===================================================

// const loadJson = async (url) => {
//   const response = await fetch(url);
//   if (response.status == 200) {
//     json = await response.json();
//     return json;
//   } else {
//     throw new Error(response.status);
//   }
// };

// loadJson("https://www.fakeurl.com/no-such-user.json").catch((err) =>
//   console.log(err)
// );

//=============================================================
//Solve promises recursively

function promiseRecursive(funcPromises) {
  if (funcPromises.length === 0) return;

  const currPromise = funcPromises.shift();
  currPromise.then((res) => console.log(res)).catch((err) => console.log(err));
  promiseRecursive(funcPromises);
}

// promiseRecursive([
//   printMessage("Pratyaksh"),
//   printMessage1("Pratyaksh"),
//   printMessage2("Pratyaksh"),
// ]);

//======================================================
//POLYFILL FOR PROMISES

function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    isFulfilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(value);
      isCalled = true;
    }
  }
  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(value);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };
  try {
    executor(resolve, reject);
  } catch (err) {
    console.error(err);
  }
}

//resolve and reject are simple which will return a PromisePolyfill
// object having an executor which will either resolve or reject.

// PromisePolyFill.resolve = (val) =>
//   new PromisePolyFill(function executor(resolve, _reject) {
//     resolve(val);
//   });

// PromisePolyFill.reject = (reason) =>
//   new PromisePolyFill(function executor(resolve, reject) {
//     reject(reason);
//   });

//==========================================================
// (1) ==> We have a promise constructor function
//(new Promise((resolve, reject) => setTimeout(() => resolve(100), 3000))) which accepts a
//callback as an argument which will be executor in our case.

// (2) ==> constructor function will return an object
//with two properties then and catch. Then and
//catch are functions which accepts a callback and also can be chained.
// They should return a reference to this.

// (3) ==> store the reference to callback function
//passed to then and catch so that it can be executed at a later
//stage basis on the status returned by executor.

// (4) ==> executor function which we will be executed
//that will either invoke resolve or reject depending on the status of async operation.
//We define our resolve callback function passed as an argument to executor. It is the callback function
//passed to then which we stored in onResolve variable.

//==========================================================
// const examplePromise = new PromisePolyFill((resolve, reject) => {
//   // setTimeout(() => {
//   reject(2);
//   // }, 2000);
// });

// examplePromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

//==============================================================
//Promise.all POLYFILL

Promise.allPolyFill = (promises) => {
  return new Promise((resolve, reject) => {
    let results = [];
    if (!promises.length) {
      resolve(results);
      return;
    }
    let pending = promises.length;

    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then((res) => {
        results[idx] = res;
        pending--;

        if (pending === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};

// Promise.allPolyFill([
//   printMessage("Pratyaksh"),
//   printMessage1("Pratyaksh"),
//   printMessage2("Pratyaksh"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Promises

const promise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("You win");
  } else {
    reject("You lose");
  }
});

promise.then((res) => console.log(res)).catch((rej) => console.log(rej));

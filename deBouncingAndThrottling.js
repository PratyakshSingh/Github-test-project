const btn = document.querySelector(".incrementCount");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggeredCount = 0;

//DEBOUNCE POLYFILL IMPLEMENTATION
const myDeBounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

//THROTTLE POLYFILL IMPLEMENTATION
const myThrottle = (cb, d) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    cb(...args);
  };
};

const deBouncedCount = myDeBounce(() => {
  triggeredCount++;
  count.innerHTML = triggeredCount;
}, 800);

const throttled = myThrottle(() => {
  triggeredCount++;
  count.innerHTML = triggeredCount;
}, 800);

btn.addEventListener("click", () => {
  pressedCount++;
  btnPress.innerHTML = pressedCount;
  //   deBouncedCount();
  //   throttled();
});

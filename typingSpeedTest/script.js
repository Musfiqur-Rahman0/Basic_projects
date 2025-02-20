const input = document.querySelector(".input");
const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const speed = document.querySelector(".speed");
const displayTime = document.querySelector(".time");
let time = 0;
let interval = false;

function startTimer() {
  if (!interval) {
    interval = setInterval(() => {
      time++;
      displayTime.textContent = `${time}`;
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(interval);
  interval = false;
}
function resetTimer() {
  stopTimer();
  time = 0;
  interval = false;
  speed.innerText = `0WPM`;
  displayTime.textContent = `${time}`;
}

function toWords(str) {
  return str.split(" ");
}

function clacWPM(wordsLength, time) {
  if (time === 0) speed.innerText = 0;
  const wpm = wordsLength / (time / 60);
  speed.innerText = `${Math.round(wpm)}WPM`;
}

input.addEventListener("keydown", () => {
  !interval && startTimer();
});

let typingTimeout;
input.addEventListener("input", () => {
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    if (interval) {
      const words = toWords(input.value);
      clacWPM(words.length, time);
      stopTimer();
    }
  }, 1000);
});

// Button Click Events
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

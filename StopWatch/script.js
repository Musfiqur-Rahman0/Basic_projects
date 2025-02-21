const timeDisplay = document.querySelector(".timer");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let time = 0;
let interval;

function startTimer() {
  if (!interval) {
    interval = setInterval(update, 1000);
  }
}
function stopTimer() {
  clearInterval(interval);
  interval = null;
}
function resetTimer() {
  clearInterval(interval);
  interval = null;
  time = 0;
  timeDisplay.textContent = `00.00`;
  start.innerText = "Start";
}

function update() {
  time++;
  let second = time % 60;
  second = second === 60 ? 0 : second;
  let minute = Math.floor(time / 60);
  minute = minute === 60 ? 0 : minute;
  second = String(second).padStart(2, "0");
  minute = String(minute).padStart(2, "0");
  timeDisplay.textContent = `${minute}.${second}`;
}

start.addEventListener("click", () => {
  if (!interval) {
    start.innerText = "Pause";
    startTimer();
  } else {
    start.innerText = "Start";
    stopTimer();
  }
});

resetBtn.addEventListener("click", resetTimer);

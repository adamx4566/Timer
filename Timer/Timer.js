const timerDisplay = document.getElementById("timer");
const minutesInput = document.getElementById("minutesInput");
const secondsInput = document.getElementById("secondsInput");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let timer;
let totalSeconds = 0;
let isRunning = false;

function updateDisplay() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  timerDisplay.textContent = 
    `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  if (isRunning) return;
  let mins = parseInt(minutesInput.value) || 0;
  let secs = parseInt(secondsInput.value) || 0;
  if (totalSeconds === 0) {
    totalSeconds = mins * 60 + secs;
  }
  if (totalSeconds <= 0) return;

  isRunning = true;
  timer = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      alert("Time's up!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  totalSeconds = 0;
  minutesInput.value = "";
  secondsInput.value = "";
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();

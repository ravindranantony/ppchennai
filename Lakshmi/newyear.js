const newyear = "1/1/2024";

const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

function timer() {
  const newDate = new Date();
  const newYearDate = new Date(newyear);
  const totalSeconds = (newYearDate - newDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.textContent = formatTime(days);
  hoursEl.textContent = formatTime(hours);
  minutesEl.textContent = formatTime(minutes);
  secondsEl.textContent = formatTime(seconds);
}
function formatTime(time) {
  return time > 10 ? time : `0${time}`;
}
timer()
setInterval(timer, 1000);
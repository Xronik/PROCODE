let state = "initial";
let counter = null;
let btn = document.querySelector(".btn");
let spin = document.querySelector(".spin");
let timer = document.querySelector(".timer");
let input = document.querySelector(".time");

function changeTimer() {
  let seconds = counter % 60;
  let minutes = Math.floor(counter / 60) % 60;
  let hours = Math.floor(counter / 3600);
  if (seconds >= 0 && seconds <= 9) {
    seconds = `0${seconds}`;
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = `0${minutes}`;
  }
  if (hours >= 0 && hours <= 9) {
    hours = `0${hours}`;
  }
  let result = `${hours} : ${minutes} : ${seconds}`;
  timer.textContent = result;
}

function run() {
  let todayDate = new Date();
  let inputMinutes = Number(input.value.slice(-2));
  let inputHours = Number(input.value.slice(0, 2));
  let timerMinutes = inputMinutes - todayDate.getMinutes();
  let timerHours = null;
  inputHours <= todayDate.getHours()
    ? (timerHours = 24 - todayDate.getHours() + inputHours)
    : (timerHours = inputHours - todayDate.getHours());

  counter = (timerHours * 60 + timerMinutes - 1) * 60 + todayDate.getSeconds();

  const interval = setInterval(function () {
    counter--;
    if (counter <= 0) {
      timer.classList.toggle("time-out");
      counter = 0;
      spin.style.animationPlayState = "paused";
    }
    changeTimer();
    if (state == "stopped") {
      clearInterval(interval);
      timer.classList.remove("time-out");
    }
  }, 1000);
}

function handleClick() {
  switch (state) {
    case "initial":
      run();
      state = "started";
      btn.value = "pause";
      spin.style.animationPlayState = "running";
      spin.style.animationName = "spin";
      break;
    case "started":
      state = "stopped";
      btn.value = "stop";
      spin.style.animationPlayState = "paused";
      break;
    case "stopped":
      counter = 0;
      changeTimer();
      state = "initial";
      btn.value = "play_arrow";
      spin.style.animationName = "none";
      break;
  }
}

btn.addEventListener("click", handleClick);

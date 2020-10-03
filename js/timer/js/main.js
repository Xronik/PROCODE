let state = 'initial';
let counter = null;
let btn = document.querySelector('.btn');
let spin = document.querySelector('.spin');
let timer = document.querySelector('.timer');
let input = document.querySelector('.time')

function changeTimer() {
    let seconds = counter % 60;
    let minutes = Math.floor(counter / 60);
    if (seconds >= 0 && seconds <= 9) {
        seconds = `0${seconds}`
    };
    if (minutes >= 0 && minutes <= 9) {
        minutes = `0${minutes}`
    };
    let result = `${minutes} : ${seconds}`;
    timer.textContent = result;
}

function run() {
    let inputHours = Number(input.value.slice(0, 2))
    let inputMinutes = Number(input.value.slice(-2))
    let todayDate = new Date()
    let timerHours = inputHours - todayDate.getHours()
    let timerMinutes = inputMinutes - todayDate.getMinutes()
    counter = (timerHours * 60 + timerMinutes - 1) * 60 + todayDate.getSeconds()

    const interval = setInterval(function () {
        counter--;
        if (counter <= 0) {
            timer.classList.toggle('time-out')
            counter = 0
            spin.style.animationPlayState = 'paused'
        }
        changeTimer();
        if (state == 'stopped') {
            clearInterval(interval);
            timer.classList.remove('time-out')
        }
    }, 1000)
}

function handleClick() {
    switch (state) {
        case "initial":
            run()
            state = 'started'
            btn.value = 'pause'
            spin.style.animationPlayState = 'running'
            spin.style.animationName = 'spin'
            break;
        case "started":
            state = "stopped"
            btn.value = 'stop'
            spin.style.animationPlayState = 'paused'
            break;
        case "stopped":
            counter = 0
            changeTimer()
            state = "initial"
            btn.value = 'play_arrow';
            spin.style.animationName = 'none'
            break;
    }
}

btn.addEventListener('click', handleClick);



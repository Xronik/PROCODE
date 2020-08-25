let state = 'initial';
let counter = 0;
let badge = document.querySelector('.btn');
let spin = document.querySelector('.spin');
let timer = document.querySelector('.timer');

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
    const interval = setInterval(function () {
        if (state == 'stopped') {
            clearInterval(interval);
        }
        counter++;
        changeTimer();
    }, 1000)
}

function handleClick() {
    switch (state) {
        case "initial":
            run()
            state = 'started'
            badge.value = 'pause'
            spin.style.animationPlayState = 'running'
            spin.style.animationName = 'spin'
            break;
        case "started":
            state = "stopped"
            badge.value = 'stop'
            spin.style.animationPlayState = 'paused'
            break;
        case "stopped":
            counter = 0
            changeTimer()
            state = "initial"
            badge.value = 'play_arrow';
            spin.style.animationName = 'none'
            break;
    }
}

const button = document.querySelector('.btn');
button.addEventListener('click', handleClick);



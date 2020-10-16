const board = (length, context = '') => { // Создаем доску
    let newArray = []
    for (let i = 0; i < length; i++) {
        let newArray2 = []
        for (let e = 0; e < length; e++) {
            newArray2[e] = context
        }
        newArray[i] = newArray2
    }
    return newArray
}

const count = (array) => { // Подсчитываем суму всех не нулевых значений 
    let sum = null
    for (key in array) {
        for (i = 0; i < array[key].length; i++) {
            if (array[key][i]) { sum++ }
        }
    }
    return sum
}
let btn = document.querySelectorAll('.btn')
let main = document.querySelector('.main')
let statusField = document.querySelector('.status')
let currentPosition = []

const boardDisplay = (array) => {  // Отрисовуем доску со статусом клеток
    let cellWhite = '<div class="cell white"></div>'
    let cellBlack = '<div class="cell black"></div>'
    let cellRed = '<div class="cell red"></div>'
    let str = ''
    let positionY = -1
    let x = -1
    array.forEach(element1 => {
        ++positionY
        element1.forEach((element2) => {
            ++x
            let positionX = x % 5
            if (element2 === null) {
                str += cellWhite
            }
            if (element2 === 1) {
                str += cellBlack
                currentPosition = [positionY, positionX]
            }
            if (element2 === 2) {
                str += cellRed
            }
        })
    });
    main.innerHTML = str
    statusField.innerHTML = `Not null cells = ${count(array)}`
}

let newBoard = board(5, null);

const setStartPoint = (array) => {
    let randomPosition = () => {
        return Math.round(Math.random() * (array.length) - 0.5)
    }
    newBoard[randomPosition()][randomPosition()] = 1
}

setStartPoint(newBoard)
boardDisplay(newBoard)
let cells = document.getElementsByClassName('cell')


const moveCell = (position, sdvig) => {  // Основной принцип движения
    path(newBoard)
    if ((sdvig === -1 && currentPosition[position] > 0) ||
        (sdvig === 1 && currentPosition[position] < (newBoard.length - 1))) {
        currentPosition[position] += sdvig
        if (newBoard[currentPosition[0]][currentPosition[1]] === 2) {
            currentPosition[position] -= sdvig
        }
        newBoard[currentPosition[0]][currentPosition[1]] = 1
        boardDisplay(newBoard)
        btnCheck(newBoard)
        checkWays()
        turnTime = 11
        setGameOver()
        setGameWin()
        console.log(ways)
    }
    btnCheck(newBoard)
}

const path = (array) => { // Рисуем путь
    array[currentPosition[0]][currentPosition[1]] = 2
}

const btnOff = (btn) => { // Условие отключения кнопки
    btn.style.cursor = 'none'
    btn.innerHTML = ''
}

const btnOn = (btn, value) => { // Условие видимой кнопки
    btn.style.cursor = 'pointer'
    btn.innerHTML = `${value}`
}

const btnCheck = (array) => { ///  Проверка условий для отображения кнопок
    if (currentPosition[1] !== 0) {
        array[currentPosition[0]][currentPosition[1] - 1] >= 1 ? btnOff(btn[0]) : btnOn(btn[0], "&#8592;")
    } else { btnOff(btn[0]) }
    if (currentPosition[0] !== 0) {
        array[currentPosition[0] - 1][currentPosition[1]] >= 1 ? btnOff(btn[1]) : btnOn(btn[1], "&#8593;");
    } else { btnOff(btn[1]) }
    if (currentPosition[0] !== array.length - 1) {
        array[currentPosition[0] + 1][currentPosition[1]] >= 1 ? btnOff(btn[2]) : btnOn(btn[2], "&#8595;");
    } else { btnOff(btn[2]) }
    if (currentPosition[1] !== array.length - 1) {
        array[currentPosition[0]][currentPosition[1] + 1] >= 1 ? btnOff(btn[3]) : btnOn(btn[3], "&#8594;");
    } else { btnOff(btn[3]) }
}

let ways = null
const checkWays = () => {  /// Подсчитываем свободные ходы
    ways = 0
    btn.forEach(elem => { elem.innerHTML == '' ? ways++ : true; })
}

let turnTime = 11
const timer = setInterval(() => {  ///   Таймер
    let timer = document.querySelector('.timer')
    turnTime--
    timer.innerHTML = `Время на ход: ${turnTime}`
}, 1000)

const restartGame = () => {
    newBoard = board(5, null);
    setStartPoint(newBoard)
    boardDisplay(newBoard)
}

const setGameOver = () => {
    if (ways === 4 || turnTime === 0) {
        if (confirm(`GAME OVER! Your score: ${count(newBoard)}. Начать новую игру?`)) {
            restartGame()
        }
    }
}
const setGameWin = () => {
    if (count(newBoard) === newBoard.length ** 2) {
        if (confirm(`YOU WIN! CONGRATULATIONS! Your score: ${count(newBoard)}. Начать новую игру?`)) {
            restartGame()
        }
    }
}

btnCheck(newBoard)

btn[0].addEventListener("mousedown", () => moveCell(1, -1));
btn[1].addEventListener("mousedown", () => moveCell(0, -1));
btn[2].addEventListener("mousedown", () => moveCell(0, 1));
btn[3].addEventListener("mousedown", () => moveCell(1, 1));

document.addEventListener("keydown", (e) => {
    e.code == "ArrowLeft" ? moveCell(1, -1) : true;
    e.code == "ArrowUp" ? moveCell(0, -1) : true;
    e.code == "ArrowDown" ? moveCell(0, 1) : true;
    e.code == "ArrowRight" ? moveCell(1, 1) : true;
});


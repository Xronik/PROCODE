let board = (x, y, context = '') => { // Создаем доску
    let newArray = []
    for (let i = 0; i < x; i++) {
        let newArray2 = []
        for (let e = 0; e < y; e++) {
            newArray2[e] = context
        }
        newArray[i] = newArray2
    }
    return newArray
}

let count = (array) => { // Подсчитываем суму всех не нулевых значений 
    let sum = null
    for (key in array) {
        for (i = 0; i < array[key].length; i++) {
            sum += array[key][i]
        }
    }
    return sum
}
let btn = document.querySelectorAll('.btn')
let main = document.querySelector('.main')
let statusField = document.querySelector('.status')
let currentPosition = []

let boardDisplay = (array) => {  // Отрисовуем доску со статусомклеток
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

let newBoard = board(5, 5, null);
newBoard[0][0] = 1
boardDisplay(newBoard)
let cells = document.getElementsByClassName('cell')

let moveLeft = () => {  // Движение влево
    path(newBoard)
    if (currentPosition[1] > 0) {
        currentPosition[1]--
        if (newBoard[currentPosition[0]][currentPosition[1]] === 2) {
            currentPosition[1]++
            btnOff(btn[0])
        } else {
            btnOn(btn[0], '&#8592;')
        };
        newBoard[currentPosition[0]][currentPosition[1]] = 1
        boardDisplay(newBoard)
    } else { btnOff(btn[0]) }
}
let moveUp = () => {  // Движение вверх
    path(newBoard)
    if (currentPosition[0] > 0) {
        currentPosition[0]--
        if (newBoard[currentPosition[0]][currentPosition[1]] === 2) {
            currentPosition[0]++
            btnOff(btn[1])
        } else {
            btnOn(btn[1], '&#8593;')
        };
        newBoard[currentPosition[0]][currentPosition[1]] = 1
        boardDisplay(newBoard)
    } else { btnOff(btn[1]) }
}
let moveDown = () => {  // Движение вниз
    path(newBoard)
    if (currentPosition[0] < newBoard.length - 1) {
        currentPosition[0]++
        if (newBoard[currentPosition[0]][currentPosition[1]] === 2) {
            currentPosition[0]--
            btnOff(btn[2])
        } else {
            btnOn(btn[2], '&#8595;')
        };
        newBoard[currentPosition[0]][currentPosition[1]] = 1
        boardDisplay(newBoard)
    } else { btnOff(btn[2]) }
}
let moveRight = () => {  // Движение вправо
    path(newBoard)
    if (currentPosition[1] < newBoard.length - 1) {
        currentPosition[1]++
        if (newBoard[currentPosition[0]][currentPosition[1]] === 2) {
            currentPosition[1]--
            btnOff(btn[3])
        } else {
            btnOn(btn[3], '&#8594;')
        };
        newBoard[currentPosition[0]][currentPosition[1]] = 1
        boardDisplay(newBoard)
    } else { btnOff(btn[3]) }
}
let path = (array) => { // Рисуем путь
    array[currentPosition[0]][currentPosition[1]] = 2
}
let btnOff = (btn) => {
    btn.style.userSelect = 'none'
    btn.innerHTML = ''
}
let btnOn = (btn, value) => {
    btn.style.userSelect = 'auto'
    btn.innerHTML = `${value}`
}

btn[0].addEventListener("mousedown", moveLeft);
btn[1].addEventListener("mousedown", moveUp);
btn[2].addEventListener("mousedown", moveDown);
btn[3].addEventListener("mousedown", moveRight);

document.addEventListener("keydown", (e) => {
    e.code == "ArrowLeft" ? moveLeft() : true;
    e.code == "ArrowUp" ? moveUp() : true;
    e.code == "ArrowDown" ? moveDown() : true;
    e.code == "ArrowRight" ? moveRight() : true;
});


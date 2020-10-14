const board = (x, y, context = '') => { // Создаем доску
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

let moveCell = (position, sdvig) => {  // Движение влево
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
    }
    btnCheck(newBoard)
}

// let moveLeft = () => {  // Движение влево
//     path(newBoard)
//     if (currentPosition[1] > 0) {
//         currentPosition[1]--
//         if (newBoard[currentPosition[0]][currentPosition[1]] === 2) {
//             currentPosition[1]++
//         }
//         newBoard[currentPosition[0]][currentPosition[1]] = 1
//         boardDisplay(newBoard)
//     }
// }
// let moveUp = () => {  // Движение вверх
//     path(newBoard)
//     if (currentPosition[0] > 0) {
//         currentPosition[0]--
//         if (newBoard[currentPosition[0]][currentPosition[1]] === 2) {
//             currentPosition[0]++
//         }
//         newBoard[currentPosition[0]][currentPosition[1]] = 1
//         boardDisplay(newBoard)
//     }
// }
// let moveDown = () => {  // Движение вниз
//     path(newBoard)
//     if (currentPosition[0] < newBoard.length - 1) {
//         currentPosition[0]++
//         if (newBoard[currentPosition[0]][currentPosition[1]] === 2) {
//             currentPosition[0]--
//         }
//         newBoard[currentPosition[0]][currentPosition[1]] = 1
//         boardDisplay(newBoard)
//     }
// }
// let moveRight = () => {  // Движение вправо
//     path(newBoard)
//     if (currentPosition[1] < newBoard.length - 1) {
//         currentPosition[1]++
//         if (newBoard[currentPosition[0]][currentPosition[1]] === 2) {
//             currentPosition[1]--
//         }
//         newBoard[currentPosition[0]][currentPosition[1]] = 1
//         boardDisplay(newBoard)
//     }
// }

let path = (array) => { // Рисуем путь
    array[currentPosition[0]][currentPosition[1]] = 2
}

let btnOff = (btn) => {
    btn.style.cursor = 'none'
    btn.innerHTML = ''
}

let btnOn = (btn, value) => {
    btn.style.cursor = 'pointer'
    btn.innerHTML = `${value}`
}

let btnCheck = (array) => {
    // for (i = 0; i < 4; i++) {
    //     btnOn(btn[i])
    // }
    console.log(array[currentPosition[0]][currentPosition[1] - 1]);
    (array[currentPosition[0]][currentPosition[1] - 1] >= 1 || (currentPosition[1] - 1) < 0) ? btnOff(btn[0]) : btnOn(btn[0], "&#8592;");
    (array[currentPosition[0] - 1][currentPosition[1]] >= 1) ? btnOff(btn[1]) : btnOn(btn[1], "&#8593;");
    (array[currentPosition[0] + 1][currentPosition[1]] >= 1) ? btnOff(btn[2]) : btnOn(btn[2], "&#8595;");
    (array[currentPosition[0]][currentPosition[1] + 1] >= 1) ? btnOff(btn[3]) : btnOn(btn[3], "&#8594;");
    console.log(null);
    // if (newBoard[currentPosition[0]][currentPosition[1]] === 2) {
    //     currentPosition[1]++
    //     btnOff(btn[0])
    // }
}


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


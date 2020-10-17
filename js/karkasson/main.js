let main = document.querySelector('.main')
let cardDeckDiv = document.querySelector('.card-deck')

const createBoardArr = (yAhis, xAhis) => { /// Создаем массив игрового поля
    let fullArr = []
    for (let i = 0; i < yAhis; i++) {
        let arrayY = []
        for (let e = 0; e < xAhis; e++) {
            arrayY[e] = ''
        }
        fullArr[i] = arrayY
    }
    return fullArr
}

let gamingBoard = createBoardArr(8, 5)

const displayBoard = (array, cellWidthHeight) => {  /// Отрисовываем игровое поле
    let boardCells = ''
    let boardWidth = null
    let cellsId = 0
    array.forEach((arrayY) => {
        boardWidth += cellWidthHeight
        main.style.width = `${boardWidth}px`
        let boardHeight = null
        arrayY.forEach(() => {
            boardHeight += cellWidthHeight
            main.style.height = `${boardHeight}px`
            boardCells += `<div class="cell" id="${cellsId}"></div>`
            cellsId++
        })
    })
    main.innerHTML = boardCells
}

displayBoard(gamingBoard, 64)

const createCardDeck = (cardsOfEachType, nmbrOfCardTypes,) => {  //// Создаем массив колоды карт
    let cardDeckArr = []
    for (i = 0; i < nmbrOfCardTypes; i++) {
        for (e = 0; e < cardsOfEachType; e++) {
            cardDeckArr.push({ id: e })
        }
    }
    return cardDeckArr
}

let cardDeckArr = createCardDeck(3, 10)

const sortCardDeck = () => { //// Сортировка масива карт в случайном порядке
    cardDeckArr.sort(() => Math.random() - 0.5)
}

sortCardDeck()
let topDeckCard = []

const displayCardDeck = () => {  /// Отрисовка и выбор верхней карты колоды
    topDeckCard = cardDeckArr.pop()
    topDeckCard !== undefined ? cardDeckDiv.style.backgroundImage = choseOfCardDisplay(topDeckCard) : alert('out of cards');
}

const choseOfCardDisplay = (elem) => { /// Добавление рисунка каждому типу карт
    switch (elem.id) {
        case 0: return "url('img/corner.png')"; break;
        case 1: return "url('img/impasse.png')"; break;
        case 2: return "url('img/stick.png')"; break;
    }
}

displayCardDeck()

const boardCellsClick = () => {  /// Ивент на клике - отрисовка карт на игровом поле и вращение
    let boardCells = document.querySelectorAll('.cell')
    boardCells.forEach((cell) => {
        let cardRotate = 0
        cell.addEventListener('click', (event) => {
            if (event.target.style.backgroundImage) {
                cardRotate += 90
                event.target.style.transform = `rotate(${cardRotate}deg)`
            } else {
                event.target.style.backgroundImage = choseOfCardDisplay(topDeckCard)
                displayCardDeck()
            }
        })
    })
}

boardCellsClick()

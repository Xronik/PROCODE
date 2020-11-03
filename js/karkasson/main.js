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

let gamingBoard = createBoardArr(8, 8)
// console.table(gamingBoard)
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
let currentCard = []

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
let cardOnBoardPosition = []
const boardCellsClick = () => {  /// Ивент на клике - отрисовка карт на игровом поле и вращение
    let boardCells = document.querySelectorAll('.cell')
    boardCells.forEach((cell) => {
        let cardRotate = 0
        cell.addEventListener('click', (event) => {
            cardOnBoardPosition[0] = event.target.id % gamingBoard.length
            cardOnBoardPosition[1] = Math.trunc(event.target.id / gamingBoard.length)
            currentCard = gamingBoard[cardOnBoardPosition[0]][cardOnBoardPosition[1]]
            if (event.target.style.backgroundImage) {
                cardRotate += 90
                event.target.style.transform = `rotate(${cardRotate}deg)`
                setCardID(currentCard, cardRotate);
                gamingBoard[cardOnBoardPosition[0]][cardOnBoardPosition[1]].cardId = cardID
                checkCardStatus(cardOnBoardPosition[0], cardOnBoardPosition[1])
            } else {
                event.target.style.backgroundImage = choseOfCardDisplay(topDeckCard)
                setCardID(topDeckCard, cardRotate);
                let newObj = { id: topDeckCard.id, cardId: cardID }
                gamingBoard[cardOnBoardPosition[0]][cardOnBoardPosition[1]] = newObj
                checkCardStatus(cardOnBoardPosition[0], cardOnBoardPosition[1])
                displayCardDeck()
                countOfCardsLast()
            }
        })
    })
}

boardCellsClick()

const countOfCardsLast = () => {
    let cardLeftDiv = document.querySelector('.card-left')
    cardLeftDiv.innerHTML = `Осталось карт: ${cardDeckArr.length}`
}

countOfCardsLast()

let cardID = []

const setCornerCardID = (deg) => {
    let cardRoundPosition = (deg / 90) % 4
    switch (cardRoundPosition) {
        case 0: return cardID = [0, 1, 1, 0]; break;
        case 1: return cardID = [0, 0, 1, 1]; break;
        case 2: return cardID = [1, 0, 0, 1]; break;
        case 3: return cardID = [1, 1, 0, 0]; break;
    }
}
const setImpasseCardID = (deg) => {
    let cardRoundPosition = (deg / 90) % 4
    switch (cardRoundPosition) {
        case 0: cardID = [0, 1, 0, 0]; break;
        case 1: cardID = [0, 0, 1, 0]; break;
        case 2: cardID = [0, 0, 0, 1]; break;
        case 3: cardID = [1, 0, 0, 0]; break;
    }
}
const setStickCardID = (deg) => {
    let cardRoundPosition = (deg / 90) % 4
    switch (cardRoundPosition) {
        case 0: cardID = [0, 1, 0, 1]; break;
        case 1: cardID = [1, 0, 1, 0]; break;
        case 2: cardID = [0, 1, 0, 1]; break;
        case 3: cardID = [1, 0, 1, 0]; break;
    }
}

const setCardID = (elem, cardRotateDeg) => {
    switch (elem.id) {
        case 0: return setCornerCardID(cardRotateDeg); break;
        case 1: return setImpasseCardID(cardRotateDeg); break;
        case 2: return setStickCardID(cardRotateDeg); break;
    }
}

const checkCornerCardStatus = (x, y) => {
    if (gamingBoard[x - 1][y]) {
        console.log(gamingBoard[x][y].cardId)
        console.log(gamingBoard[x - 1][y].cardId)

    }
}

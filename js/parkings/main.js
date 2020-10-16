let parking = [];
let index = 0
let main = document.querySelector('.main')
let time = document.querySelector('.time')
let inputFree = document.querySelector('.input-free-wrap')
let inputOcupied = document.querySelector('.input-ocupied')
let inputTime = document.querySelector('.input')
let btnInput = document.querySelector('.btn-input')
let btnOk = document.querySelector('.btn-ok')
let btnCancel = document.querySelector('.btn-no')
let parkingTime = document.querySelector('.parking-time')

const setParking = (number) => {
    for (i = 1; i <= number; i++) {   /// Создаем парковку
        let parkingSlot = { id: i, status: 'free', time: 0 };
        parking.push(parkingSlot);
    };
}
setParking(10)
const countFreeParking = (array) => {  /// Подсчитываем количество свободных мест
    let freeParking = null;
    array.forEach(element => {
        element.status === 'free' ? freeParking++ : true;
    });
    return freeParking
};

const displayAllParkingStatus = (array) => {  /// Рисуем на странице статус парковок
    let str = ''
    array.forEach(element => {
        str += `<div class="parking-slot free" id='${element.id}'>Номер места: ${element.id}</br> Статус: ${element.status}</br>Время парковки: ${element.time}</div>`
    });
    main.innerHTML = str
};

const displayCurrentTime = () => {  /// Выводим на страницу текущее время и количество свободных мест
    setInterval(() => {
        return time.innerHTML = `Время: ${new Date().toLocaleTimeString()}.  Свободных парковок: ${countFreeParking(parking)}`
    }, 1000)
}

const checkParkingStatus = (element) => {  /// Проверяем свободна парковка или нет
    return element.status === 'free' ? true : false;
}

displayAllParkingStatus(parking)
let parkingSlot = document.querySelectorAll('.parking-slot')
displayCurrentTime()

parkingSlot.forEach(element => {   /// Обработка ивента при нажатии на паркоместо (всплытие доп. окна)
    element.addEventListener('click', () => {
        index = element.id - 1
        if (checkParkingStatus(parking[index])) {
            inputOcupied.classList.remove('visible')
            inputFree.classList.add('visible')

        } else {
            inputFree.classList.remove('visible')
            inputOcupied.classList.add('visible')
            parkingTime.innerHTML = `Оставшееся время: ${calcTimeLast()}`
        }
    })
})

const refreshStatus = () => {  /// Обновляем статус парковок
    parkingSlot[index].innerHTML = `Номер места: ${parking[index].id}</br> Статус: ${parking[index].status}</br>Время парковки: ${parking[index].time}`
}

const parsTimeInput = () => {   /// Преобразуем стринговое значение время парковки в localdate
    let m = moment()
    let inputHours = parking[index].time.slice(0, 2)
    let inputMinutes = parking[index].time.slice(-2)
    inputHours < moment().hour() ? m.add(1, 'd') : true;
    let input = m.hours(inputHours).minutes(inputMinutes)
    return input
}

const calcTimeLast = () => {   /// Подсчет оставшегося времени парковки
    let timeDiff = parsTimeInput() - moment() /// Разница во времени между концом парковки и нынешним временем
    let timeLast = `${moment.utc(timeDiff).format('hh:mm')}`  /// Вывод оставшегося времени
    return timeLast
}

const checkAllert = () => {  /// Всплывающий алерт если количество свободных парковок <20% и время от 9-00 до 18-00
    let inputHours = inputTime.value.slice(0, 2)
    if ((countFreeParking(parking) < parking.length * 0.2) && (inputHours > 9) && (inputHours < 18)) {
        if (!confirm('Желательно не занимать парковку! Продолжить действие?')) {
            parking[index].status = 'free'
            parking[index].time = 0
            parkingSlot[index].classList.remove('ocupied')
        }
    }
}

btnInput.addEventListener('click', () => {   /// Обработка ивента - ввод времени парковки
    parking[index].status = 'ocupied'
    parking[index].time = inputTime.value
    parkingSlot[index].classList.add('ocupied')
    checkAllert()
    refreshStatus()
    displayCurrentTime()
    inputFree.classList.remove('visible')
})

btnOk.addEventListener('click', () => {   /// Обработка ивента - освободить парковку
    parking[index].status = 'free'
    parking[index].time = 0
    parkingSlot[index].classList.remove('ocupied')
    refreshStatus()
    displayCurrentTime()
    inputOcupied.classList.remove('visible')
})

btnCancel.addEventListener('click', () => {   /// Обработка ивента - оставить парковку нетронутой
    inputOcupied.classList.remove('visible')
})


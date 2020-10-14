let parking = [];
let index = null
let main = document.querySelector('.main')
let time = document.querySelector('.time')
let inputFree = document.querySelector('.input-free-wrap')
let inputOcupied = document.querySelector('.input-ocupied')
let inputTime = document.querySelector('.input')
let btnInput = document.querySelector('.btn-input')
let btnOk = document.querySelector('.btn-ok')
let btnCancel = document.querySelector('.btn-no')
let parkingTime = document.querySelector('.parking-time')

for (i = 1; i <= 10; i++) {   /// Создаем парковку
    let parkingSlot = { id: i, status: 'free', time: 0 };
    parking.push(parkingSlot);
};

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
            inputFree.classList.add('visible')
        } else {
            inputOcupied.classList.add('visible')
            parkingTime.innerHTML = `Время парковки до ${parking[index].time}`
            console.dir(inputOcupied)
        }
    })
})

const refreshStatus = () => {  /// Обновляем статус парковок
    parkingSlot[index].innerHTML = `Номер места: ${parking[index].id}</br> Статус: ${parking[index].status}</br>Время парковки: ${parking[index].time}`
}

btnInput.addEventListener('click', () => {   /// Обработка ивента - ввод времени парковки
    parking[index].status = 'ocupied'
    parking[index].time = inputTime.value
    calcTimeLast()
    parkingSlot[index].classList.add('ocupied')
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

const calcTimeLast = () => {
    // let qwe = new Date().toLocaleTimeString('ua-UA', { hour: '2-digit', minute: '2-digit' })
    // let new1 = new Date() + ((inputTime.value.slice(0, 2) - qwe.slice(0, 2)) * 3600000 + (inputTime.value.slice(-2) - qwe.slice(-2)) * 60000)
    // let new2 = new Date(new1).toLocaleTimeString('ua-UA', { hour: '2-digit', minute: '2-digit' })
    // console.log(qwe)
    // console.log(inputTime.value)
    // console.log(inputTime.value.slice(0, 2) - qwe.slice(0, 2))
    // console.log(inputTime.value.slice(-2) - qwe.slice(-2))
    // console.log(new1)
    // console.log(new2)
    let m = moment()
    m.hours(inputTime.value.slice(0, 2))
    m.minutes(inputTime.value.slice(-2))
    console.log(m.toString())
}
// for (let i = 0; i < 12; i++) {
//     document.querySelector('.zodiacs').innerHTML += `&#${9800 + i}`;
// }

///// ***************************************************************////////

// function randomInt(min, max) {
//     let random = Math.floor(Math.random() * (max - min)) + min;
//     return random;
// }

// let randomNumber = randomInt(1, 33);
// let result = null;
// console.log(randomNumber)

// do {
//     result = Number(prompt('Введите число'));
//     console.log(result);
//     (result > randomNumber) ? console.log('Число больше, поробуйте еще раз.') :
//         (result < randomNumber) ? console.log('Число меньше, попробуйте еще раз.') : true;
// } while (result !== randomNumber)

// alert('Вы угадали, это число ' + result);

////// **********************************************************************///////

// let sborka = {
//     korobka: {
//         type1: 'avtomat',
//         type2: 'mechanic',
//     },
//     salon: {
//         type1: 'koga',
//         type2: 'zamsh',
//     },
//     color: {
//         type1: 'yellow',
//         type2: 'red',
//     },
//     doors: {
//         type1: 'two',
//         type2: 'four',
//     },
//     energy: {
//         type1: 'electro',
//         type2: 'fuel',
//     }
// }

// let newCar = () => {
//     let newObj = {};
//     for (let key in sborka) {
//         let randomType = Math.floor(Math.random() * (Object.keys(sborka[key]).length));
//         newObj[key] = Object.values(sborka[key])[randomType];
//     }
//     return newObj;
// }
// let lada = newCar();
// let nissan = newCar();
// let lanos = newCar();
// let ford = newCar();
// console.log(lada)
// console.log(nissan)
// console.log(lanos)
// console.log(ford)

// let arr = [2, 4, 6, 8, 10, 12];

// let out = [];
// let out1 = [];
// let out2 = [];
// let out4 = [];
// for (x = 0; x < 5; x++) {
// out[i] = arr[i] * 3;
// out1[i] = arr[i] * 10;
// out2[i] = [out[i], out1[i]];
// let out3 = [];
// for (y = 0; y < 5; y++) {
//     out3[y] = (y + 1) * (x + 1);
// }
// out4[x] = out3;
// console.log(out3);
// };

// console.log(out4);

// let nmbr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// let newNmbr = [];
// for (i = 0; i < nmbr.length; i++) {
//     let index = (i * 3) % 8;
//     if (nmbr[i] === '9') { index = 8 };
//     newNmbr[index] = nmbr[i];
// }
// console.table(newNmbr);

// let arr2 = [];
// for (x = 0; x < 10; x++) {

//     let arr = [];
//     for (y = 0; y < 10; y++) {
//         arr[y] = (y + 1) * (x + 1);
//         if ((x + 1) > (y + 1)) { arr[y] = null };
//     }
//     arr2[x] = arr;
// };

// console.table(arr2);

// let firstPlayer = 100;
// let secondPlayer = 100;
// while (firstPlayer > 0 && secondPlayer > 0) {
//     firstPlayer -= Math.floor(Math.random() * 6) + 1;
//     secondPlayer -= Math.floor(Math.random() * 6) + 1;
// }
// firstPlayer > secondPlayer ?
//     console.log('Второй игрок проиграл') :
//     console.log('Первый игрок проиграл');

// let str = '';
// let btn = document.querySelector('.btn');

// for (i = 0; i < 10; i++) {
//     str += '<input type="text" class = "input">'
// };

// document.body.insertAdjacentHTML('afterbegin', str);

// let inputEl = document.querySelectorAll('.input');

// const btnFunc = () => {
//     for (i = 0; i < inputEl.length; i++) {
//         inputEl[i].value *= 2;
//     }
// };

// btn.addEventListener('click', btnFunc);

// let a = '12'
// let b = '123'
// let c = '12'
// let d = []
// for (key1 in a) {
//     for (key2 in b) {
//         for (key3 in c) {
//             let str = a[key1] + b[key2] + c[key3];
//             d.push(str)
//         }
//     }
// }
// console.log(d);

// let man = {
//     name: 'Andrii',
//     sername: 'Mukha',
//     age: '32',
//     height: 182,
// }
// console.log(Object.keys(man), Object.values(man))

// let woman = [1, 4, 5, 7]

// console.log(woman.filter(element => element % 2));

// let index = woman.map((element, i) => {
//     if (element % 2) { return console.log(i) }
// })

// const len = 10;
// const array = []
// let randomInt = (min, max) => {
//     let random = Math.floor(Math.random() * (max - min)) + min;
//     return random;
// }
// for (i = 0; i < len; i++) {
//     array.push(randomInt(1000, -1000));
// }

// let newArray = array.map(element => element > 0 ? element : Math.abs(element))

// let array2 = newArray.map(element => String(element).length)

// let array3 = array.map(element => element > 0 ? true : false)

// const pos = array.map((element, index) => element > 0 ? index : null)

// const pos2 = array.map((element, index) => String(element).includes('3') ? index : null)

// console.log(array);
// console.log(newArray);
// console.log(array2);
// console.log(array3);
// console.log(pos2);
// let str = ''

// let str = (number) => {
//     let fullStr = ''
//     for (i = 0; i < number; i++) {
//         fullStr += '<div class="rectangle"></div>'
//     }
//     return fullStr
// }
// document.body.innerHTML = str(4)
// let check = true;
// let color = () => {
//     if (check == true) {
//         for (i = 0; i < div.length; i++) {
//             div[i].classList.add('red')
//             div[i].classList.remove('blue')
//         }
//         check = false
//     } else {
//         for (i = 0; i < div.length; i++) {
//             div[i].classList.add('blue')
//             div[i].classList.remove('red')
//         }
//         check = true
//     }
// }

// let divNumber = (number) => {
//     let fullStr = ''
//     for (i = 0; i < number; i++) {
//         fullStr += '<div class="rectangle"></div>'
//     }
//     return fullStr
// }
// document.body.innerHTML = divNumber(10)
// let div = document.querySelectorAll('.rectangle')
// let colorChange = () => {
//     for (i = 0; i < div.length; i++) {
//         div[i].classList.toggle('red')
//     }
// }
// div[0].addEventListener('click', colorChange)

// let divNumber = (number) => {
//     let fullStr = ''
//     for (i = 0; i < number; i++) {
//         fullStr += '<div class="rectangle"></div>'
//     }
//     return fullStr
// }
// document.body.innerHTML = divNumber(10)
// let div = document.querySelectorAll('.rectangle')
// let colorChange = () => {
//     for (i = 0; i < div.length; i++) {
//         div[i].classList.toggle('red')
//     }
// }
// div[0].addEventListener('mousedown', colorChange)
// div[0].addEventListener('mouseup', colorChange)

// let today = new Date()
// let birthday = new Date(1988, 0, 7)
// let days = (today - birthday) / (1000 * 60 * 60 * 24)
// console.log(days);

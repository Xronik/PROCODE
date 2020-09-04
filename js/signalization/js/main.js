// let code = document.querySelector('.code');
// let sdvig = 4 << 4;
// code.textContent = sdvig;
// code.style.backgroundColor = 'yellow';

let code = document.querySelector('.code');
let door = document.querySelector('.door');
let move = document.querySelector('.move');
let alarm = document.querySelector('.alarm');

let doorStatus = door.textContent;
let moveStatus = move.textContent;
let alarmStatus = alarm.textContent;

let a = document.querySelectorAll('div');
console.log(a);
a.forEach(function (div) {
   div.style.cssText = `
      margin: 50px auto 0;
      width: 100px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border: 1px solid black;
      `;
}
);

if (doorStatus == 'closed' && moveStatus == 'off' && alarmStatus == 'disable') {
   for (wrongCount = 0; wrongCount < 3; wrongCount++) {
      newCode = prompt('Введите код:  ');
      if (newCode == '0701') {
         code.textContent = 'write'
         door.textContent = 'open';
         door.style.backgroundColor = 'green'
         move.textContent = 'on';
         move.style.backgroundColor = 'green'
         alarm.style.backgroundColor = 'green'
         alert('Ви можете увійти');
         break;
      } else if (newCode == null) {
         alert('Відміна введення. Гарного дня');
         break;
      } else if (newCode !== 0701 && wrongCount == 2) {
         alert('Визиваємо поліцію');
         code.textContent = 'wrong'
         code.style.backgroundColor = 'red'
         document.querySelector('.alarm').textContent = 'enable';
         alarm.style.backgroundColor = 'red'
      }
   }
} else if (doorStatus == 'open' && moveStatus == 'on' && alarmStatus == 'disable') {
   for (wrongCount = 0; wrongCount < 3; wrongCount++) {
      newCode = prompt('Введите код для активации охраны:  ');
      if (newCode == '0701') {
         document.querySelector('.door').textContent = 'closed';
         door.style.backgroundColor = 'green'
         document.querySelector('.move').textContent = 'on';
         move.style.backgroundColor = 'green'
         alert('Гарного дня.');
         break;
      } else if (newCode == null) {
         alert('Відміна введення. Спробуйте ще.');
      } else if (newCode !== 0701 && wrongCount == 2) {
         alert('Визиваємо поліцію');
         code.textContent = 'wrong'
         code.style.backgroundColor = 'red'
         document.querySelector('.alarm').textContent = 'enable';
         alarm.style.backgroundColor = 'red'
      }
   }
} else if (doorStatus == 'closed' && (moveStatus == 'on' || alarmStatus == 'enable')) {
   alert('Визиваємо поліцію');
}
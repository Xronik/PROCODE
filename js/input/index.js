let btn = document.querySelector('.btn');
let result = document.querySelector('.result');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');
let sum = null;

btn.addEventListener('click', () => {
    sum = Number(input1.value) + Number(input2.value) + Number(input3.value);
    result.textContent = sum;
})

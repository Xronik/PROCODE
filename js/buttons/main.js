let btn = document.getElementsByClassName('btn')
let text = document.querySelector('.txt')
btn[0].addEventListener('click', () => {
    btn[1].classList.toggle('btn-visible')
    text.classList.remove('txt-content')
})
btn[1].addEventListener('click', () => {
    text.classList.toggle('txt-content')
})

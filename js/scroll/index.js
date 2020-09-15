const cntr = document.querySelector('.center');

const scrollBtm = (event) => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight) {
        cntr.style.color = 'white'
        document.body.style.backgroundColor = 'black'
    } else {
        cntr.style.color = 'black'
        document.body.style.backgroundColor = 'white'
    }
}

window.addEventListener('scroll', scrollBtm)
let btn = document.querySelectorAll(".btn");
let move = document.querySelector(".move");
let locomotive = document.querySelector(".locomotive");
let newPosition = null;
let moveLeft = () => {
  newPosition--;
  locomotive.style.transform = `translateX(${newPosition}px)`;
};
let moveRight = () => {
  newPosition++;
  locomotive.style.transform = `translateX(${newPosition}px)`;
};
let light = () => {};
btn[0].addEventListener("mousedown", moveLeft);
btn[2].addEventListener("mousedown", moveRight);
document.addEventListener("keyup", (e) => {
  console.log(e.code);
  e.code == "ArrowLeft" ? moveLeft() : true;
  e.code == "ArrowRight" ? moveRight() : true;
});

// document.addEventListener('keydown', (e)=>{
//     newPosition++;
//     locomotive.style.transform = `translateX(${newPosition}px)`;
// })

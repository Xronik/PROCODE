let btn = document.querySelectorAll(".btn");
let locomotive = document.querySelector(".locomotive");
let light = document.querySelector(".light");
let newPosition = null;
let moveLeft = () => {
  newPosition -= 5;
  locomotive.style.transform = `translateX(${newPosition}px)`;
};
let moveRight = () => {
  newPosition += 5;
  locomotive.style.transform = `translateX(${newPosition}px)`;
};
let lightChange = () => {
  light.classList.toggle("light_on");
  btn[1].innerHTML === "Light off"
    ? (btn[1].innerHTML = "Light on")
    : (btn[1].innerHTML = "Light off");
};

btn[0].addEventListener("mousedown", moveLeft);
btn[1].addEventListener("mousedown", lightChange);
btn[2].addEventListener("mousedown", moveRight);

document.addEventListener("keydown", (e) => {
  e.code == "ArrowLeft" ? moveLeft() : true;
  e.code == "ArrowRight" ? moveRight() : true;
  e.code == "Space" ? lightChange() : true;
});

let btn = document.querySelectorAll(".btn");
let tank = document.querySelector(".tank");
// let fire = document.querySelector(".fire");
let newPosition = null;
let moveLeft = () => {
  newPosition -= 5;
  tank.style.transform = `translateX(${newPosition}px)`;
  tank.classList.remove("tank_right");
};
let moveRight = () => {
  newPosition += 5;
  tank.style.transform = `translateX(${newPosition}px)`;
  tank.classList.add("tank_right");
};
let fireUp = () => {
  // fire.classList.toggle("light_on");
  btn[1].innerHTML === "Light off"
    ? (btn[1].innerHTML = "Light on")
    : (btn[1].innerHTML = "Light off");
};

btn[0].addEventListener("mousedown", moveLeft);
btn[1].addEventListener("mousedown", fireUp);
btn[2].addEventListener("mousedown", moveRight);

document.addEventListener("keydown", (e) => {
  e.code == "ArrowLeft" ? moveLeft() : true;
  e.code == "ArrowRight" ? moveRight() : true;
  e.code == "Space" ? fireUp() : true;
});

let btn = document.querySelectorAll(".btn");
let tank = document.querySelector(".tank");
let fire = document.querySelector(".fire");
let width = document.body.clientWidth / 2 - 70;
let position = "";
let duration = null;
let str = "";

let moveLeft = () => {
  tank.style.left = `-${width}px`;
  tank.classList.remove("reverse");
  speedStability();
};
let moveRight = () => {
  tank.style.left = `${width}px`;
  tank.classList.add("reverse");
  speedStability();
};
let fireStart = () => {
  fire.style.display = "block";
  fire.style.animationPlayState = "running";
  fire.classList.add("fire");
  fire.onanimationend = () => {
    fire.classList.remove("fire");
  };
};
let speedStability = () => {
  tank.classList.contains("reverse")
    ? (duration = (10 * Math.abs(width - parseInt(position, 10))) / width)
    : (duration = (10 * Math.abs(width + parseInt(position, 10))) / width);
  duration == 0 ? (duration = 20) : true;
  tank.style.transitionDuration = `${duration}s`;
};
let pause = () => {
  position = window.getComputedStyle(tank, null).getPropertyValue("left");
  tank.style.left = `${position}`;
};
btn[0].addEventListener("mousedown", moveLeft);
btn[0].addEventListener("mouseup", pause);
btn[1].addEventListener("mousedown", fireStart);
btn[2].addEventListener("mousedown", moveRight);
btn[2].addEventListener("mouseup", pause);

document.addEventListener("keydown", (e) => {
  e.code == "ArrowLeft" ? moveLeft() : true;
  e.code == "ArrowRight" ? moveRight() : true;
  e.code == "Space" ? fireStart() : true;
});
document.addEventListener("keyup", (e) => {
  e.code == "ArrowLeft" || e.code == "ArrowRight" ? pause() : true;
});

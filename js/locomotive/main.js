let btn = document.querySelectorAll(".btn");
let locomotive = document.querySelector(".locomotive");
let light = document.querySelector(".light");
let width = document.body.clientWidth / 2 - 70
let position = ''
let duration = null
console.log(locomotive.style.transitionDuration)
let moveLeft = () => {
  locomotive.style.left = `-${width}px`
  locomotive.classList.remove('reverse')
};
let moveRight = () => {
  locomotive.style.left = `${width}px`
  locomotive.classList.add('reverse')

};
let lightChange = () => {
  light.classList.toggle("light_on");
  btn[1].innerHTML === "Light off"
    ? (btn[1].innerHTML = "Light on")
    : (btn[1].innerHTML = "Light off");
};
let pause = () => {

  position = window.getComputedStyle(locomotive, null).getPropertyValue("left")
  locomotive.style.left = `${position}`
  // duration = 10
  duration = 10 * (1 - Math.abs(parseInt(position, 10) / document.body.clientWidth))
  locomotive.style.transitionDuration = `${duration}s`
  console.log(parseInt(position, 10))
  console.log(document.body.clientWidth)
  console.log(duration)
  console.log(locomotive.style.transitionDuration)
}
btn[0].addEventListener("mousedown", moveLeft);
btn[0].addEventListener("mouseup", pause);
btn[1].addEventListener("mousedown", lightChange);
btn[2].addEventListener("mousedown", moveRight);
btn[2].addEventListener("mouseup", pause);

document.addEventListener("keydown", (e) => {
  e.code == "ArrowLeft" ? moveLeft() : true;
  e.code == "ArrowRight" ? moveRight() : true;
  e.code == "Space" ? lightChange() : true;
});
document.addEventListener("keyup", (e) => {
  e.code == "ArrowLeft" || e.code == "ArrowRight" ? pause() : true;
});
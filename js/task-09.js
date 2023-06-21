const refs = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function colorChange() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;

  refs.span.textContent = color;
}

refs.button.addEventListener("click", colorChange);

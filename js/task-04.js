const refs = {
  incBtn: document.querySelector('[data-action="increment"]'),
  decBtn: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector("#value"),
  counterValue: 0,
};
const increment = () => {
  refs.counterValue += 1;
  refs.value.textContent = refs.counterValue;
};
const decrement = () => {
  refs.counterValue -= 1;
  refs.value.textContent = refs.counterValue;
};

refs.incBtn.addEventListener("click", increment);
refs.decBtn.addEventListener("click", decrement);

const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

refs.decrementBtn.addEventListener('click', onClickDecrementBtn);
refs.incrementBtn.addEventListener('click', onClickIncrementBtn);

function onClickDecrementBtn() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}
function onClickIncrementBtn() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}

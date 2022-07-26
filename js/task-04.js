const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector('#value'),
};

const { decrementBtn, incrementBtn, value } = refs;

let counterValue = 0;

decrementBtn.addEventListener('click', onClickDecrementBtn);
incrementBtn.addEventListener('click', onClickIncrementBtn);

function onClickDecrementBtn() {
  counterValue -= 1;
  value.textContent = counterValue;
}
function onClickIncrementBtn() {
  counterValue += 1;
  value.textContent = counterValue;
}

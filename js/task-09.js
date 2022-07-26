function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  buttonEl: document.querySelector('.change-color'),
  spanEl: document.querySelector('.color'),
};
const { bodyEl, buttonEl, spanEl } = refs;

buttonEl.addEventListener('click', onChangeBodyColor);

function onChangeBodyColor() {
  bodyEl.setAttribute('style', 'background-color: ;');
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}

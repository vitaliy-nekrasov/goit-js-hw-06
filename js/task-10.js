function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divBoxEl: document.querySelector('#boxes'),
  inputEl: document.querySelector('input'),
  createButtonEl: document.querySelector('button[data-create]'),
  destroyButtonEl: document.querySelector('button[data-destroy]'),
};
const { divBoxEl, inputEl, createButtonEl, destroyButtonEl } = refs;

createButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = inputEl.value;
  let value = 20;
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    value += 10;
    divEl.setAttribute('style', 'height: ;width: ;background-color: ;');
    divEl.style.width = `${value}px`;
    divEl.style.height = `${value}px`;
    divEl.style.backgroundColor = getRandomHexColor();

    divBoxEl.append(divEl);
  }
}

function destroyBoxes() {
  divBoxEl.innerHTML = '';
}

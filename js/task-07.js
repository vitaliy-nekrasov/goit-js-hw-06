const refs = {
  inputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

const { inputEl, textEl } = refs;

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  textEl.style = `font-size: ${event.currentTarget.value}px`;
}

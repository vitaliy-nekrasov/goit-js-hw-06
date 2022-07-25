const refs = {
  inputEl: document.querySelector('#name-input'),
  outputEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.outputEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    refs.outputEl.textContent = 'Anonymous';
  }
}

const refs = {
  inputEl: document.querySelector('#name-input'),
  outputEl: document.querySelector('#name-output'),
};

const { inputEl, outputEl } = refs;

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  outputEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    outputEl.textContent = 'Anonymous';
  }
}

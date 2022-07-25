const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputValid);

function onInputValid(event) {
  inputEl.classList.add('invalid');
  if (event.currentTarget.value.length == inputEl.dataset.length) {
    inputEl.classList.replace('invalid', 'valid');
  }
  if (event.currentTarget.value === '') {
    inputEl.classList.remove('invalid');
    inputEl.classList.remove('valid');
  }
}

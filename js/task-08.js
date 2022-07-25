const refs = {
  formEl: document.querySelector('.login-form'),
  inputMailEl: document.querySelector('[type=email]'),
  inputPasswordEl: document.querySelector('[type=password]'),
  buttonEl: document.querySelector('button'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (event.currentTarget.elements[0].value === '') {
    alert('Все поля должны быть заполнены');
  }
}

// if (refs.inputPasswordEl.textContent === '') {
//   alert('Все поля должны быть заполнены');
// }

// console.log(event);
// console.log(event.currentTarget.elements[0].value);

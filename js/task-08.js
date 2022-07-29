const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены');
  }

  const objKeyEmail = email.name;
  const objKeyPass = password.name;

  const result = {
    [objKeyEmail]: email.value,
    [objKeyPass]: password.value,
  };
  formEl.reset();
  console.log(result);
}

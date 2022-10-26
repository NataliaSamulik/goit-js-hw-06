const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', onSubmitRegistration);
function onSubmitRegistration(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

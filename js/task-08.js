const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", onSubmitRegistration);
function onSubmitRegistration(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  let formData = {
    Email: `${ email.value }`,
    Password: `${ password.value }`
  }

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
  
  console.log(formData);
  event.currentTarget.reset();
}
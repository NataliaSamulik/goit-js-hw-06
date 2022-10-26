const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', inputChange);

function inputChange(event) {
  span.textContent = event.currentTarget.value;
}

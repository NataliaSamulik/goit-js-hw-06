const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', onClickDecrementBtn);

function onClickDecrementBtn() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

incrementBtn.addEventListener('click', onClickIncrementBtn);
function onClickIncrementBtn() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

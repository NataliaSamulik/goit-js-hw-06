function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
btnChangeColor.addEventListener('click', onBtnClick);

function onBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorName.textContent = bodyEl.style.backgroundColor;
}

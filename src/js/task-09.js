function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216).toString(16)}`;
}
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
const body = document.querySelector('body');

function changeBodyColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}

changeColorButton.addEventListener('click', changeBodyColor);

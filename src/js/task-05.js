const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', event => {
  if (event.target.value) {
    outputName.textContent = event.target.value;
  } else {
    outputName.textContent = 'Anonymous';
  }
});

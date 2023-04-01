const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
  const requiredLength = input.getAttribute('data-length');
  const currentLength = event.target.value.length;

  if (currentLength === Number(requiredLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
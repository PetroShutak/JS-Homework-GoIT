const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', () => {
  textRef.style.fontSize = `${inputRef.value}px`;
});

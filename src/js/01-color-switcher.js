const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', onStartBtnClick);
refs.btnStop.addEventListener('click', onStopBtnClick);

let timerId = null;

function onStartBtnClick() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  clearInterval(timerId);
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

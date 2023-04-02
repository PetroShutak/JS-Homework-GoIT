// import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import { Report } from 'notiflix/build/notiflix-report-aio';

const refs = {
  body: document.querySelector('body'),
  dateInput: document.querySelector('input#datetime-picker'),
  btnStartTimer: document.querySelector('[data-start]'),
  daysRemaining: document.querySelector('[data-days]'),
  hoursRemaining: document.querySelector('[data-hours]'),
  minutesRemaining: document.querySelector('[data-minutes]'),
  secondsRemaining: document.querySelector('[data-seconds]'),
};

refs.body.style.backgroundColor = '#ece5da';
refs.btnStartTimer.disabled = true;
refs.btnStartTimer.addEventListener('click', timerStart);
const TIMER_DELAY = 1000;
let timerId = null;
let selectedDate = null;
let currentDate = null;
let remainingTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onDateCheck(selectedDates);
  },
};

flatpickr(refs.dateInput, options);

Report.info('✌🏻 Hello, my Friend!', 'Choose a date and click on start', 'Ok');

function onDateCheck(selectedDates) {
  selectedDate = selectedDates[0].getTime();
  currentDate = new Date().getTime();

  if (selectedDate > currentDate) {
    refs.btnStartTimer.disabled = false;
    Report.success(
      '⏱ Are you ready? Click on start!',
      '" The distance between dreams and reality is called action " - Arina B.',
      'Ok'
    );
    return;
  }
  Report.failure(
    '❗️ Error...',
    'Please, choose a date in the future and remember: "Only forward to our victory!"',
    'Ok'
  );
}

function timerStart() {
  timerId = setInterval(() => {
    currentDate = new Date().getTime();
    if (selectedDate - currentDate < 1000) {
      clearInterval(timerId);
      refs.btnStartTimer.disabled = true;
      refs.dateInput.disabled = false;
      Report.info(
        '✅ The End! Timer stopped!',
        'Please, if you want to start timer, choose a date and click on start or reload this page',
        'Ok'
      );
      return;
    } else {
      refs.btnStartTimer.disabled = true;
      refs.dateInput.disabled = true;
      currentDate += 1000;
      remainingTime = Math.floor(selectedDate - currentDate);
      convertMs(remainingTime);
    }
  }, TIMER_DELAY);
}

function createMarkup({ days, hours, minutes, seconds }) {
  refs.daysRemaining.textContent = days;
  refs.hoursRemaining.textContent = hours;
  refs.minutesRemaining.textContent = minutes;
  refs.secondsRemaining.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  createMarkup({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
}

// title-startTimer
function timerStart() {
  timerId = setInterval(() => {
    currentDate = new Date().getTime();
    if (selectedDate - currentDate < 1000) {
      clearInterval(timerId);
      refs.btnStartTimer.disabled = true;
      refs.dateInput.disabled = false;
      document.title = "Timer Ended";
      Report.info(
        '✅ The End! Timer stopped!',
        'Please, if you want to start timer, choose a date and click on start or reload this page',
        'Ok'
      );
      return;
    } else {
      refs.btnStartTimer.disabled = true;
      refs.dateInput.disabled = true;
      currentDate += 1000;
      remainingTime = Math.floor(selectedDate - currentDate);
      const { days, hours, minutes, seconds } = convertMs(remainingTime);
      document.title = `${days}:${hours}:${minutes}:${seconds}`;
      createMarkup({ days, hours, minutes, seconds });
    }
  }, TIMER_DELAY);
}


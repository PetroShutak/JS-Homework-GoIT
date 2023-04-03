import { Notify } from 'notiflix/build/notiflix-notify-aio';

// first variant

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }
// const form = document.querySelector('.form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const delay = Number(form.elements.delay.value);
//   const step = Number(form.elements.step.value);
//   const amount = Number(form.elements.amount.value);

//   for (let i = 0; i < amount; i++) {
//     const position = i + 1;
//     const currentDelay = delay + step * i;
//     // const currentDelay = delay * i;
//     createPromise(position, currentDelay)
//       .then(({ position, delay }) => {
//         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     console.log(currentDelay);
//   }
// });

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// {/* <p style="margin-top: 600px;">Shutak P. FS76 Online</p> */}

// second variant (approved)

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
form.addEventListener('submit', onCreateClick);

function onCreateClick(e) {
  e.preventDefault();

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  let inputDelay = Number(delay.value);

  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, inputDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    inputDelay += Number(step.value);
    console.log(inputDelay);
  }
}

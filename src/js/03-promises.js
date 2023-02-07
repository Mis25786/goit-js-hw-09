//! Завдання 3 - генератор промісів
// Виконуй це завдання у файлах 03-promises.html і 03-promises.js. Подивися демо-відео роботи генератора промісів.

// HTML містить розмітку форми, в поля якої користувач буде вводити першу затримку в мілісекундах, крок збільшення затримки для кожного промісу після першого і кількість промісів, яку необхідно створити.

// <form class="form">
//   <label>
//     First delay (ms)
//     <input type="number" name="delay" required />
//   </label>
//   <label>
//     Delay step (ms)
//     <input type="number" name="step" required />
//   </label>
//   <label>
//     Amount
//     <input type="number" name="amount" required />
//   </label>
//   <button type="submit">Create promises</button>
// </form>

//todo Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay)
//todo стільки разів, скільки ввели в поле amount.
//todo Під час кожного виклику передай їй номер промісу (position), що створюється,
//todo і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або відхиляється через delay часу. Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів. Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// Для відображення повідомлень користувачеві, замість console.log(), використовуй бібліотеку notiflix.
//?==========================================================
//* імпортуємо бібліотеку notiflix
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//* доступ до інпутів
const refs = {
  form: document.querySelector('.form'),

  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),

  submit: document.querySelector('button[type="submit"]'),
};

refs.form.addEventListener('input', onDateInput);

function onDateInput() {
  console.log('zis input =>');
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }

  //   .then(({ position, delay }) => {
  //     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //   })
  //   .catch(({ position, delay }) => {
  //     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  //   });
}
//
// createPromise(2, 1500)

//
//
//
//
//
//
//
//
//
//
//
///
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//?========================================
// const form = document.querySelector('.form');
// const refs = {
//   delay: document.querySelector('[name = "delay"]'),
//   step: document.querySelector('[name = "step"]'),
//   amount: document.querySelector('[name = "amount"]'),
// };
// const btn = document.querySelector('button');

// form.addEventListener('submit', onClick);

// function createPromise(position, delay) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
//   return promise;
// }

// function onClick(event) {
//   event.preventDefault();

//   let delay = Number(refs.delay.value);
//   let step = Number(refs.step.value);
//   let amount = Number(refs.amount.value);

//   for (let i = 1; i <= amount; i += 1) {
//     createPromise(i, delay)
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     delay += step;
//   }
// }

//?================================================
// // Import library
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// // Get form element
// const formRef = document.querySelector('.form');

// // Set event listener submit on form
// formRef.addEventListener('submit', onSubmitForm);

// // Submit form
// function onSubmitForm(e) {
//   e.preventDefault();

//   let delay = Number(formRef.delay.value);

//   for (let i = 1; i <= formRef.amount.value; i += 1) {
//     createPromise(i, delay)
//       .then(({ position, delay }) => {
//         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     delay += Number(formRef.step.value);
//   }
// }

// // Create promise
// function createPromise(position, delay) {
//   const obj = { position, delay };
//   const shouldResolve = Math.random() > 0.3;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         // Fulfill
//         resolve(obj);
//       } else {
//         // Reject
//         reject(obj);
//       }
//     }, delay);
//   });
// }
//?================================================

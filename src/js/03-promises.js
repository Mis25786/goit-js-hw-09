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

//todo Доповни код функції createPromise таким чином, щоб вона повертала один проміс,
//todo який виконується або відхиляється через delay часу.
//todo Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay
//todo зі значеннями однойменних параметрів.
//todo Використовуй початковий код функції для вибору того, що потрібно зробити з промісом
//todo - виконати або відхилити.

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

//* викликати функцію під час сабміту
//* викликати функцію - вказану кількість разів перебор
//* робити затримку викликів введену кількість користувачем amount
//* створити проміс в функції яка буде повертати проміс який виконується або відхиляється через delay часу
//* його значення має бути об'єкт в якому будуть властивості position і delay

//* доступ до тегів
// const refs = {
//   form: document.querySelector('.form'),

//   delay: document.querySelector('input[name="delay"]'),
//   step: document.querySelector('input[name="step"]'),
//   amount: document.querySelector('input[name="amount"]'),

//   submit: document.querySelector('button[type="submit"]'),
// };

const form = document.querySelector('.form');
// const delay = document.querySelector('input[name="delay"]');
// const step = document.querySelector('input[name="step"]');
// const amount = document.querySelector('input[name="amount"]');
// const submit = document.querySelector('button[type="submit"]');

//* на момент сабміту форми викликає функцію createPromise
form.addEventListener('submit', onSubmit);

// const delay = 0;
// const step = 0;
// const amount = 0;
// console.log(delay);
// console.log(step);
// console.log(amount);

function onSubmit(e) {
  e.preventDefault();

  //* витягуємо данні з інпутів
  let delay = +e.currentTarget.elements.delay.value;
  let step = +e.currentTarget.elements.step.value;
  let amount = +e.currentTarget.elements.amount.value;

  //* викликати функцію - вказану кількість разів і виводимо повідомлення
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        );
      })
      .catch(({ position, delay }) => {
        console.log(
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        );
      });
    delay += step;
  }
}
//*============
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  //* деструктурізація об'єкта
  const object = { position, delay };

  //* створити проміс в функції яка буде повертати проміс який виконується або відхиляється через delay часу
  //* його значення має бути об'єкт в якому будуть властивості position і delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(object);
        // Fulfill
      } else {
        reject(object);
        // Reject
      }
    }, delay);
  });
}

//?========================================

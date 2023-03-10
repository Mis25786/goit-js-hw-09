//! Завдання 2 - таймер зворотного відліку
// Виконуй це завдання у файлах 02-timer.html і 02-timer.js.
//todo Напиши скрипт таймера, який здійснює зворотний відлік до певної дати.
//todo Такий таймер може використовуватися у блогах та інтернет-магазинах,
//todo сторінках реєстрації подій, під час технічного обслуговування тощо.
//todo Подивися демо-відео роботи таймера.

// Елементи інтерфейсу
// HTML містить готову розмітку таймера, поля вибору кінцевої дати і кнопку, по кліку на яку, таймер повинен запускатися. Додай мінімальне оформлення елементів інтерфейсу.

// <input type="text" id="datetime-picker" />
// <button type="button" data-start>Start</button>

// <div class="timer">
//   <div class="field">
//     <span class="value" data-days>00</span>
//     <span class="label">Days</span>
//   </div>
//   <div class="field">
//     <span class="value" data-hours>00</span>
//     <span class="label">Hours</span>
//   </div>
//   <div class="field">
//     <span class="value" data-minutes>00</span>
//     <span class="label">Minutes</span>
//   </div>
//   <div class="field">
//     <span class="value" data-seconds>00</span>
//     <span class="label">Seconds</span>
//   </div>
// </div>

// Бібліотека flatpickr
// Використовуй бібліотеку flatpickr для того, щоб дозволити користувачеві кросбраузерно вибрати кінцеву дату і час в одному елементі інтерфейсу. Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

// // Описаний в документації
// import flatpickr from "flatpickr";
// // Додатковий імпорт стилів
// import "flatpickr/dist/flatpickr.min.css";

// Бібліотека очікує, що її ініціалізують на елементі input[type="text"], тому ми додали до HTML документу поле input#datetime-picker.

// <input type="text" id="datetime-picker" />

// Другим аргументом функції flatpickr(selector, options) можна передати необов'язковий об'єкт параметрів. Ми підготували для тебе об'єкт, який потрібен для виконання завдання. Розберися, за що відповідає кожна властивість в документації «Options», і використовуй його у своєму коді.

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

// Вибір дати
// Метод onClose() з об'єкта параметрів викликається щоразу під час закриття елемента інтерфейсу, який створює flatpickr. Саме у ньому варто обробляти дату, обрану користувачем. Параметр selectedDates - це масив обраних дат, тому ми беремо перший елемент.

// Якщо користувач вибрав дату в минулому, покажи window.alert() з текстом "Please choose a date in the future".
// Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
// Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в майбутньому.
// Натисканням на кнопку «Start» починається відлік часу до обраної дати з моменту натискання.
// Відлік часу
// Натисканням на кнопку «Start» скрипт повинен обчислювати раз на секунду, скільки часу залишилось до вказаної дати, і оновлювати інтерфейс таймера, показуючи чотири цифри: дні, години, хвилини і секунди у форматі xx:xx:xx:xx.

// Кількість днів може складатися з більше, ніж двох цифр.
// Таймер повинен зупинятися, коли дійшов до кінцевої дати, тобто 00:00:00:00.
// НЕ БУДЕМО УСКЛАДНЮВАТИ
// Якщо таймер запущений, для того щоб вибрати нову дату і перезапустити його - необхідно перезавантажити сторінку.

// Для підрахунку значень використовуй готову функцію convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// Форматування часу
// Функція convertMs() повертає об'єкт з розрахованим часом, що залишився до кінцевої дати. Зверни увагу, що вона не форматує результат. Тобто, якщо залишилося 4 хвилини або будь-якої іншої складової часу, то функція поверне 4, а не 04. В інтерфейсі таймера необхідно додавати 0, якщо в числі менше двох символів. Напиши функцію addLeadingZero(value), яка використовує метод padStart() і перед рендерингом інтефрейсу форматує значення.

// Бібліотека повідомлень
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Для відображення повідомлень користувачеві, замість window.alert(), використовуй бібліотеку notiflix.
//?==================================================================================
//* імпортуємо бібліотеку flatpickr
import flatpickr from 'flatpickr';
// підкулючаємо CSS бібліотеки
import 'flatpickr/dist/flatpickr.min.css';
// require('flatpickr/dist/themes/dark.css');
//* імпортуємо бібліотеку notiflix
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//*==========================================
const refs = {
  input: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysTimer: document.querySelector('[data-days]'),
  hoursTimer: document.querySelector('[data-hours]'),
  minutesTimer: document.querySelector('[data-minutes]'),
  secondsTimer: document.querySelector('[data-seconds]'),
  timerBox: document.querySelector('.timer'),
};

// const input = document.getElementById('datetime-picker');
// const startBtn = document.querySelector('[data-start]');

// const daysTimer = document.querySelector('[data-days]');
// const hoursTimer = document.querySelector('[data-hours]');
// const minutesTimer = document.querySelector('[data-minutes]');
// const secondsTimer = document.querySelector('[data-seconds]');

// const timer = document.querySelector('.timer');

//*============================ по Репеті ========================================

//* слухач на кнопку
refs.startBtn.addEventListener('click', onStart);

//* ==================== kalendar ==========================
const options = {
  enableTime: true, // Вмикає засіб вибору часу
  time_24hr: true, // Відображає засіб вибору часу в 24-годинному режимі без вибору AM/PM, якщо ввімкнено.
  defaultDate: new Date(), // Встановлює початкові вибрані дати.
  minuteIncrement: 1, // Регулює крок для введення хвилин (включно з прокручуванням)
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] <= Date.now()) {
      refs.startBtn.disabled = true;
      return Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
      return Notify.success('Start a countdown timer?');
    }
  },
};

//* підключаємо на input календар та його options (опції) отримуємо дату обрану користувачем
const fp = flatpickr('input', options);

function onStart() {
  //* робимо кнопку після старту не активною
  refs.startBtn.disabled = true;

  //* айді таймера
  let intervalId = setInterval(() => {
    // console.log(intervalId);

    //* запускаємо час початку відліку - старт
    const currentTime = Date.now();
    //   console.log('chas', currentTime);

    //* дата вибрана користувачем початковий час
    const startTime = fp.selectedDates[0];

    //* віднімаємо початковий час від початку відліку (отримуємо різницю між стартом і теперішнім часом)
    const deltaTime = startTime - currentTime;
    //   console.log(deltaTime);

    //* при закінченні таймера зупиняємо його і виводимо повідомлення
    if (deltaTime < 0) {
      clearInterval(intervalId);
      refs.startBtn.disabled = false;
      return Notify.info('Please choose a new date!');
    }

    //* виводимо в об'єкт дні/години/хвилини/секунди
    const time = convertMs(deltaTime);
    //   console.log(time);

    updateClockface(time);
  }, 1000);
}

// //* провіряємо дату чи не є минулим якщо так то виводимо повідомлення і кнопка не активна якщо ні то активна і можемо стартувати відлік
// function currentDifferenceDate(selectedDates) {

// }

//* (показує часна сторінці) обновля інтерфейс
function updateClockface({ days, hours, minutes, seconds }) {
  refs.daysTimer.textContent = `${days}`;
  refs.hoursTimer.textContent = `${hours}`;
  refs.minutesTimer.textContent = `${minutes}`;
  refs.secondsTimer.textContent = `${seconds}`;
}

//* добавляє до цифр таймера одне число (0)/(Огортаємо цією функцією Мат.вирази в функ. convertMs(ms) => addLeadingZero(Math.floor(ms / day));)
function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

//* приймає час в мілісекундах
//* витягнемо з мілісекунд дні години хвилини секунди
//* повертає об'єкт з властивостями - дні години хвилини секунди
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

//?====================================================================

//?====================================================================
const a = '!!!test control!!!';
console.log(a);

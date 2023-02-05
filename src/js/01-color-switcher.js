//! Завдання 1 - перемикач кольорів
// Виконуй це завдання у файлах 01-color-switcher.html і 01-color-switcher.js.
// Подивися демо-відео роботи перемикача.

// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

//todo Напиши скрипт, який після натискання кнопки «Start»,
//todo раз на секунду змінює колір фону <body> на випадкове значення,
//todo використовуючи інлайн стиль.
//todo Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

//* ===============================
//* функція зміни рандом кольора
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//* ===============================
//* доступ до кнопок та боді
const startBtn = document.querySelector('[data-start]');
// console.log(startBtn);
const stopBtn = document.querySelector('[data-stop]');
// console.log(stopBtn);
// const body = document.querySelector('body');
// console.dir(body);

//* айді таймера
let timerId = null;

//* старт
startBtn.addEventListener('click', () => {
  //* запускаємо безперервний таймер і зчитуємо айді
  timerId = setInterval(() => {
    // body.style.backgroundColor = getRandomHexColor();
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  //* додаємо атрибут і видаляємо
  startBtn.toggleAttribute('disabled');
});

//* стоп
stopBtn.addEventListener('click', () => {
  //* зупиняємо таймер
  clearInterval(timerId);
  alert(`Демонстрція кольорів зупинена!`);

  //* видаляємо атрибут
  startBtn.removeAttribute('disabled');
});

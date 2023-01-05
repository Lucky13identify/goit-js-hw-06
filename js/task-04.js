// Получаем доступ

const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');
const showValue = document.querySelector("#value");

// Создаем переменную с текущим значением

let counterValue = 0;

// Создаем функции

const valueDec = () => {
  counterValue -= 1;
  return (showValue.textContent = counterValue);
};

const valueInc = () => {
  counterValue += 1;
  return (showValue.textContent = counterValue);
};

// Вешаем слушателя

const buttonEventListenerDec = buttonDec.addEventListener("click", valueDec);
const buttonEventListenerInc = buttonInc.addEventListener("click", valueInc);

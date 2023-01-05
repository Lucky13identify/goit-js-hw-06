// Получаем доступ к инпуту

const inputEl = document.querySelector("#validation-input");

// Пишем функцию которая будет сравнивать к-во символов при потере фокуса
// Если длина инпута === 6, добавь к нему класс valid, если нет, то invalid

const validClass = () => {
  if (inputEl.value.length === 6) {
    return inputEl.classList.toggle("valid");
  } else {
    return inputEl.classList.toggle("invalid");
  }
};

inputEl.addEventListener("blur", validClass);

// Получаем доступ к инпуту

const inputEl = document.querySelector("#validation-input");

// Пишем функцию которая будет сравнивать к-во символов при потере фокуса
// Если длина инпута === 6, добавь к нему класс valid, если нет, то invalid

// console.dir(inputEl.attributes[2].nodeValue);
const validClass = () => {
  if (inputEl.value.length === Number(inputEl.attributes[2].nodeValue)) {
    return inputEl.classList.toggle("valid");
  }
  return inputEl.classList.toggle("invalid");
};

inputEl.addEventListener("blur", validClass);

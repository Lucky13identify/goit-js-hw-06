// // Получаем доступ к инпуту и спану

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

// Пишeм функцию

const inputText = () => {
  if (input.value) {
    return (output.textContent = input.value);
  }
};

// Выводим что вводиться в инпут
input.addEventListener("input", inputText);

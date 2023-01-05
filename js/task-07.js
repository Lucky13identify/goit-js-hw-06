// Получить доступ к самому инпуту и спану

const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

// Написать функцию которая будет изменять размер текста
// добвляя инлайн font - size

const fontSizeAtr = () => {
  return (spanEl.style.fontSize = inputEl.value + "px");
};

inputEl.addEventListener("input", fontSizeAtr);

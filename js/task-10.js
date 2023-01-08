function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxes = document.querySelector("#boxes");
const input = document.querySelector("[type=number]");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");

// // Функция которая создает к-во div указанное в параметре функции,
// // добавляет размеры им и добавляет их в div.

// Переменная для роста W&H
let plusWidth = Number.parseInt("20px");
let plusHeigh = Number.parseInt("20px");

const createBoxes = (amount) => {
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");

    plusWidth += 10;
    plusHeigh += 10;

    divEl.textContent = " ";
    divEl.classList.add("box");
    divEl.style.width = `${plusWidth}px`;
    divEl.style.height = `${plusHeigh}px`;
    divEl.style.backgroundColor = getRandomHexColor();

    divBoxes.append(divEl);

    console.log(divEl);
  }
};

// // Функция все удаляет

const destroyBoxes = () => {
  // document.location.reload();
  input.value = "";
  divBoxes.remove();
};

// // Слушаем

buttonCreate.addEventListener("click", () => createBoxes(input.value));
buttonDestroy.addEventListener("click", destroyBoxes);

// // Размеры самого первого <div> - 30px на 30px.
// // Каждый элемент после первого, должен быть шире и
// // выше предыдущего на 10px.

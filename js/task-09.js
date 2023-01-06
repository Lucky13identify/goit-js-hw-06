function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Обращаемся к кнопке и бади и спану

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

// Создаем функцию, которая получат в себя каллбэк функцию

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
};

button.addEventListener("click", changeColor);

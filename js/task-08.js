// Получаем доступ к форме и инпутам

const form = document.querySelector(".login-form");
const email = document.querySelector("[type=email]");
const password = document.querySelector("[type=password]");

// Создаем функцию в которой: отменяем перезагрузку страницы, выводим ошибку
// (если поля пустые), забираем данные пользователя и очищаем все поля

const formSubmit = (event) => {
  event.preventDefault();

  event.currentTarget.elements.email.value === "" ||
  event.currentTarget.elements.password.value === ""
    ? alert("Заполните все поля для ввода данных!")
    : null;

  const dataUserInfo = {};
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  dataUserInfo["email"] = email;
  dataUserInfo["password"] = password;

  console.log(dataUserInfo);

  form.reset();
};

form.addEventListener("submit", formSubmit);

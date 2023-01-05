// Обращание к тэгу и классу

const categoriesOfList = document.querySelectorAll(".item > h2");
const listEl = document.querySelectorAll(".item > ul");

// Получаем общее к-во h2

const lengthArray = categoriesOfList.length;

// Функция принимает один параметр - индекс массива

const indexOfArray = (index) => {
  return index;
};

// Вызываем

console.log("Number of categories: ", lengthArray);

console.log("Category:", categoriesOfList[indexOfArray(0)].textContent);
console.log("Elements:", listEl[indexOfArray(0)].children.length);

console.log("Category:", categoriesOfList[indexOfArray(1)].textContent);
console.log("Elements:", listEl[indexOfArray(1)].children.length);

console.log("Category:", categoriesOfList[indexOfArray(2)].textContent);
console.log("Elements:", listEl[indexOfArray(2)].children.length);

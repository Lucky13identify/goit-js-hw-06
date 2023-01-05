const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Создаем функцию

const newLiEl = (tag, classTag, array) => {
  const createTag = document.createElement(tag);
  createTag.classList.add(classTag);
  createTag.textContent = array;
  return createTag;
};

console.log(newLiEl("h1", "items", ingredients[0]));
console.log(newLiEl("h1", "items", ingredients[1]));
console.log(newLiEl("h1", "items", ingredients[2]));
console.log(newLiEl("h1", "items", ingredients[3]));
console.log(newLiEl("h1", "items", ingredients[4]));
console.log(newLiEl("h1", "items", ingredients[5]));

// Получаем доступ к элементу в котрый хотим вложить

const ulEl = document.querySelector("#ingredients");

// Вкладываем элементы за один раз

ulEl.append(
  newLiEl("h1", "items", ingredients[0]),
  newLiEl("h1", "items", ingredients[1]),
  newLiEl("h1", "items", ingredients[2]),
  newLiEl("h1", "items", ingredients[3]),
  newLiEl("h1", "items", ingredients[4]),
  newLiEl("h1", "items", ingredients[5])
);

console.log(ulEl);

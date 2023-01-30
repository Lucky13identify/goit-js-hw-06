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

console.log(newLiEl("li", "items", ingredients[0]));
console.log(newLiEl("li", "items", ingredients[1]));
console.log(newLiEl("li", "items", ingredients[2]));
console.log(newLiEl("li", "items", ingredients[3]));
console.log(newLiEl("li", "items", ingredients[4]));
console.log(newLiEl("li", "items", ingredients[5]));

// Получаем доступ к элементу в котрый хотим вложить

const ulEl = document.querySelector("#ingredients");

// Вкладываем элементы за один раз

ulEl.append(
  newLiEl("li", "items", ingredients[0]),
  newLiEl("li", "items", ingredients[1]),
  newLiEl("li", "items", ingredients[2]),
  newLiEl("li", "items", ingredients[3]),
  newLiEl("li", "items", ingredients[4]),
  newLiEl("li", "items", ingredients[5])
);

console.log(ulEl);

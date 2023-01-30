const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

// Создаем функцию

const array = ingredients.map((item) => {
  const createTag = document.createElement("li");
  createTag.classList.add("items");
  createTag.textContent = item;
  console.log(createTag);
  return createTag;
});

ulEl.append(...array);

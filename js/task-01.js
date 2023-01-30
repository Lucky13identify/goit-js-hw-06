// Обращание к тэгу и классу

const categoriesOfList = document.querySelectorAll(".item > h2");
const listEl = document.querySelectorAll(".item > ul");
const list = document.querySelectorAll(".item");

const lengthArray = categoriesOfList.length;
console.log("Number of categories: ", lengthArray);

function total() {
  list.forEach((item) => {
    console.log("Category:", item.children[0].outerText);
    console.log("Elements:", item.children[1].children.length);
  });
}

total();

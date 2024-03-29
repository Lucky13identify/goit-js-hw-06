const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Получаем доступ к gallery
const listGallery = document.querySelector(".gallery");
console.log(listGallery);

//Перебираем массив
const arrayImage = images
  .map((image) => {
    return `<li class = animal><img src = ${
      image.url
    } alt =${image.alt.replaceAll(" ", "_")}></li>`;
  })
  .join(" ");

console.log(arrayImage);

// Добавляем перебраный массив в gallery
listGallery.insertAdjacentHTML("afterbegin", arrayImage);

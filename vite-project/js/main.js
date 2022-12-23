import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOM } from "./dom";
import { plushies } from "./menu";
AOS.init();

document.querySelector("#app").innerHTML = `
  <h1>wholesome sanrio plushies!</h1>
  <a href="https://www.sanrio.com/" target="_blank">go to sanrio</a>
`;

plushies.forEach((plushie) => {
  DOM.display.insertAdjacentHTML(
    "beforebegin",
    `
    <div class="plushie-card">
    <h2 class="plushie-product">${plushie.name}</h2>
    <div class= "img-container">
    <div class= "img-overlay">
    </div>
    <img src="${plushie.img}"
    alt="" class= "plushie-img">
    </div>
    <h3 class= "plushie-price">price: $${plushie.price}</h3>
    </div>`
  );
});
console.log(plushies);

/* const getProducts = {
  getPlushies: plushies
    .filter((element) => element.type.includes("plushies"))
    .forEach((element) => {
      console.log(element.name);
      DOM.box.insertAdjacentHTML = `
    <h2>${element.name}</h2>`;
    }),
};

getProducts.getPlushies; */

/* const getRProducts = {
  getRare: plushies
    .filter((element) => element.type.includes(`rare`))
    .forEach((element) => {
      console.log(element.name);
      DOM.box.insertAdjacentElement = `
    <h1>${element.name}</h1>`;
    }),
};

getRProducts.getRare.insertAdjacentElement(
  "beforeend",
  `<div class = "card" id= "card-box">
    <h2 class= "card-name">${element.name}</h2>
    <h3 class= "card-price">${element.price}</h3>
    <img class= "card-img" src="${img}>
    <h3 class= "card-availability">${element.inStock}</h3>
    <h3 class= "card-type">${element.type}</h3>
    </div>`
);
 */
/* const getCProducts = {
  getCommon: plushies
    .filter((element) => element.type.includes(`common`))
    .forEach((element) => {
      console.log(element.name);
      DOM.box.insertAdjacentElement = `
    <h1>${element.name}</h1>`;
    }),
}; */

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

document
  .querySelector(".inStock-btn")
  .addEventListener("click", function () {});

/* plushies.form.addEventListener("click"); */
/* plushies.name.insertAdjacentElement(
  `"beforeend",
  <div class="card" id="card-box">
    <h2 class="card-name">${name}</h2>
    <h3 class="card-price">${price}</h3>
    <img class="plushieimg" src="${img}" alt="this is the plushie img>
  </div>`
); */

//const DOMSelectors = {
//display: document.querySelector("#display"),
//name: document.getElementById("#name"),
//price: document.getElementById("#price"),
//img: document.getElementById("img"),
//inStock: document.getElementById("#inStock"),
//rare: document.getElementById("#rare"),
//};

//DOMSelectors.display.addEventListener(function (e) {
//e.preventDefault();
//console.log(e);
//let name = DOMSelectors.name.value;
//let price = DOMSelectors.price.value;
//let img = DOMSelectors.img.value;
//let inStock = DOMSelectors.inStock.value;
//let rare = DOMSelectors.rare.value;
//console.log(name);
//console.log(price);
//console.log(img);
//console.log(inStock);
//console.log(rare);
//});

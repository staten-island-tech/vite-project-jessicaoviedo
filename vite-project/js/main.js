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
    "beforeend",
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

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

const inStock = document.getElementById("inStock-btn");
inStock.addEventListener("click", function () {
  display.innerHTML = "";
  const inStockfilter = plushies.filter(
    (plush) => plush.inStock === "in stock!"
  );
  inStockfilter.forEach((element) => {
    display.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="plushie-card">
    <h2 class="plushie-product">${element.name}</h2>
    <div class= "img-container">
    <div class= "img-overlay">
    </div>
    <img src="${element.img}"
    alt="" class= "plushie-img">
    </div>
    <h3 class= "plushie-price">price: $${element.price}</h3>
    <h3 class= "plushie-status">status: ${element.inStock}</h3>
    </div>`
    );
  });
});

const rarity = document.getElementById("rare-btn");
rarity.addEventListener("click", function () {
  display.innerHTML = "";
  const rarityfilter = plushies.filter((plush) => plush.type === "rare");
  rarityfilter.forEach((element) => {
    display.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="plushie-card">
    <h2 class="plushie-product">${element.name}</h2>
    <div class= "img-container">
    <div class= "img-overlay">
    </div>
    <img src="${element.img}"
    alt="" class= "plushie-img">
    </div>
    <h3 class= "plushie-price">price: $${element.price}</h3>
    <h3 class= "plushie-type">type: ${element.type}</h3>
    </div>`
    );
  });
});

const price = document.getElementById("expensive-btn");
price.addEventListener("click", function () {
  display.innerHTML = "";
  const pricefilter = plushies.filter((plush) => plush.price === 15.0);
  pricefilter.forEach((element) => {
    display.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="plushie-card">
    <h2 class="plushie-product">${element.name}</h2>
    <div class= "img-container">
    <div class= "img-overlay">
    </div>
    <img src="${element.img}"
    alt="" class= "plushie-img">
    </div>
    <h3 class= "plushie-price">price: $${element.price}</h3>
    <h3 class= "plushie-type">type: ${element.type}</h3>
    </div>`
    );
  });
});

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

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

function inStockbtn() {
  const inStock = {
    getInStock: plushies
      .filter((element) => element.inStock.includes(`in stock!`))
      .forEach((element) => {
        console.log(element.name);
        DOM.display.insertAdjacentHTML = `
      <h1>${element.name}</h1>`;
      }),
  };
  inStock.getInStock;

  inStock.forEach((element) => {
    element.addEventListener("click", function (btn) {
      btn.DOM.display.insertAdjacentHTML(
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
  });
}

inStockbtn.getInStock;

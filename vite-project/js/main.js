import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import { plushies } from "./menu";

document.querySelector("#app").innerHTML = `
  <h1>wholesome sanrio plushies!</h1>
  <a href="https://www.sanrio.com/" target="_blank">go to sanrio</a>
`;

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

const DOMSelectors = {
  display: document.querySelector("#display"),
  name: document.getElementById("#name"),
  price: document.getElementById("#price"),
  img: document.getElementById("img"),
  inStock: document.getElementById("#inStock"),
  rare: document.getElementById("#rare"),
};

DOMSelectors.display.addEventListener(function (e) {
  e.preventDefault();
  console.log(e);
  let name = DOMSelectors.name.value;
  let price = DOMSelectors.price.value;
  let img = DOMSelectors.img.value;
  let inStock = DOMSelectors.inStock.value;
  let rare = DOMSelectors.rare.value;
  console.log(name);
  console.log(price);
  console.log(img);
  console.log(inStock);
  console.log(rare);
});

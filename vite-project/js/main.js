import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import { plushies } from "./menu";

document.querySelector("#app").innerHTML = `
  <h1>hello vite!!!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">documentation</a>
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

// import apps from "./apps.js";

import me from "./me.js";
import home from "./home.js";
import portfolio from "./portfolio.js";

window.addEventListener("scroll", () =>
  document
    .querySelector(".main-nav-container")
    .classList.toggle("sticky", window.scrollY > 0)
);

document.querySelector(".nav-menu").addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("link-item") ||
    e.target.classList.contains("get-in-touch")
  )
    return;
  e.preventDefault();
  const secClicked = e.target.dataset.sec__clicked;
  const mainContent = document.querySelector(".content");
  mainContent.innerHTML = "";
  mainContent.innerHTML =
    secClicked === "home"
      ? home()
      : secClicked === "portfolio"
      ? portfolio
      : me;
  console.log(mainContent);
});

"use strict";

const header = document.querySelector(".container");
const hero = document.querySelector(".hero");

function reportWindowSize() {
  hero.style.marginLeft = getComputedStyle(header)["margin-left"];
}
reportWindowSize();
window.addEventListener("resize", reportWindowSize);

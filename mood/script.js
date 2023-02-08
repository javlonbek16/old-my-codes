"use strict";
let dark = document.querySelector(".dark-mood");
let light = document.querySelector(".light-mood");

light.addEventListener("click", function () {
  document.body.classList.remove("dark");
});

dark.addEventListener("click", function () {
  document.body.classList.remove("light");
});

light.addEventListener("click", function () {
  document.body.classList.add("light");
});

dark.addEventListener("click", function () {
  document.body.classList.add("dark");
});

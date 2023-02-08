"use strict";

function ReverseString(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Not valid";
  }

  const revArray = [];
  const length = str.length - 1;

  for (let i = length; i >= 0; i--) {
    revArray.push(str[i]);
  }

  return revArray.join("");
}

console.log(ReverseString("f y b "));

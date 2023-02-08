"use strict";

//=== UNIVERSAL SELECTOR FUNCTION ====///
const $ = function (selector) {
  return document.querySelector(selector);
};
//===UNIVERSAL SELECTOR FUNCTION ====///
const $$ = function (selector) {
  return document.querySelectorAll(selector);
};

/// ======= DYNAMIC CREAT ELEMENT ======////

const createElement = function (tagName, className, content) {
  const newElement = document.createElement(tagName);

  if (className) {
    newElement.setAttribute("class", className);
  }

  if (content) {
    newElement.innerHTML = content;
  }
  return newElement;
};

// arrow functioun da this  keyword  => "use strict" ? = global window

// const app = () => {
//   console.log(this);
// };
// app();

// const obj = {
//   getInfo: function () {
//     console.log(this);
//   },
// };
// obj.getInfo();

// this  keyword  obj ichda  teng obj ga

//==============constructor================//

// function Device(name, color, price, brand, type) {
//   this.name = name;
//   this.color = color;
//   this.price = price;
//   this.brand = brand;
//   this.type = type;
//   this.allInfo = function () {
//     console.log(
//       `name:${this.name}color: ${this.color} price ${this.price} ${this.brand} ${this.type}`
//     );
//   };
// }

// const iphone = new Device(
//   "iphone senda pro max  ",
//   "gold",
//   300,
//   "apple",
//   " smartphone"
// );

// console.log(iphone);

// Device.prototype.readMore = function () {
//     console.log(`${this.name} read More...`);
// };

// iphone.allInfo();
// iphone.readMore();

function addNumber() {
  console.log(this);
}

let sum = {
  number: 99999,
};
addNumber.call(sum);

function number(num) {
  console.log(this + num);
}

const app = number.bind(100);

app(90);
app(60);
app(950);
app(30);
//==============constructor================//

class Device {
  constructor(name, color, price, brand, type) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.brand = brand;
    this.type = type;
    this.allInfo = function () {
      console.log(
        `name:${this.name}color: ${this.color} price ${this.price} ${this.brand} ${this.type}`
      );
    };
  }
}

const iphone = new Device(
  "iphone senda pro max  ",
  "gold",
  300,
  "apple",
  " smartphone"
);

console.log(iphone);

Device.prototype.readMore = function () {
  console.log(`${this.name} read More...`);
};

iphone.allInfo();
iphone.readMore();

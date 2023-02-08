const $ = function (selector) {
  return document.querySelector(selector);
};

const $$ = function (selector) {
  return document.querySelectorAll(selector);
};

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

const showModalBtn = document.querySelector(".Add_add");
const cancelbtn = document.querySelector("#cancelbtn");
const books_content = document.querySelector("#books_content");
const form = document.querySelector("#form");
const book_title = document.querySelector("#book_title");
const author = document.querySelector("#author");
const category = document.querySelector("#category");
const price = document.querySelector("#price");
const date = document.querySelector("#date");
const publisherName = document.querySelector("#publisherName");
const rate = document.querySelector("#rate");
const add_btn = document.querySelector("#add_btn");
const loadingBtn = document.querySelector("#loading");
import { showModal } from "./modal.js";
import { Books } from "./src/books.js";
import { BooksApi } from "./src/getBooksFromApi.js";
const api = "https://bookshelter-a8a58-default-rtdb.firebaseio.com";

let METHOD = "POST";
let GLOBALID;

const categoryOptions = [
  {
    name: "Comedy",
    value: "comedy",
  },
  {
    name: "Romance",
    value: "romance",
  },
];

let arr3 = [];

const booksApi = new BooksApi(api, arr3);

booksApi.getAllBooks();

// function getAllBooks() {
//   Books.renderBooks(arr3, true, books_content);
//   fetch(`${api}/books.json`)
//     .then((res) => {
//       if (!res.ok) throw res;

//       return res.json();
//     })
//     .then((res) => {
//       if (!res) Books.renderBooks(arr3, false, books_content);
//       else {
//         let arr2 = Object.keys(res).map((item) => {
//           return {
//             ...res[item],
//             id: item,
//           };
//         });

//         arr3 = arr2;

//         Books.renderBooks(arr3, false, books_content);
//       }
//     });
// }

// getAllBooks();

function sendData(e) {
  e.preventDefault();

  const bookObj = new Books(
    author.value,
    book_title.value,
    price.value,
    category.value,
    date.value,
    publisherName.value,
    rate.value
  );
  console.log(bookObj);

  add_btn.classList.add("d-none");
  loadingBtn.classList.remove("d-none");

  fetch(
    METHOD === "POST " ? `${api}/books.json` : `${api}/books/${GLOBALID}.json`,
    {
      method: METHOD,
      body: JSON.stringify(bookObj),
    }
  )
    .then((res) => {
      if (!res.ok) throw res;

      return res.json();
    })
    .then((res) => {
      console.log(res);
      add_btn.classList.remove("d-none");
      loadingBtn.classList.add("d-none");
      showModal();
      book_title.value = "";

      booksApi.getAllBooks();
      METHOD = "POST";
    });
}

function showCategoryOptions() {
  let result = "";

  categoryOptions.forEach((item) => {
    result += ` <option value="${item.value}">${item.name}</option>`;
  });

  category.innerHTML = result;
}

function deleteCard(id) {
  const idCard = id;

  fetch(`${api}/books/${idCard}.json`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) throw res;

      return res.json();
    })
    .then((res) => {
      console.log(res);
      arr3 = [];
      booksApi.getAllBooks();
    });
}

showCategoryOptions();

function editCard(id) {
  showModal();

  add_btn.textContent = "Edited";
  METHOD = "PUT";
  GLOBALID = id;

  console.log(METHOD);

  fetch(`${api}/books/${id}.json`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);

      book_title.value = res.title;
      author.value = res.author;
      price.value = res.price;
      category.value = res.category;
      date.value = res.date;
      publisherName.value = res.publisherName;
      rate.value = res.rate;
    });
}



showModalBtn.addEventListener("click", showModal);
cancelbtn.addEventListener("click", showModal);
form.addEventListener("submit", sendData);

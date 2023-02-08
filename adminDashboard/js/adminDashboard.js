let add = document.querySelector(".Add_add");
let modalOpen = document.querySelector(".backdrop");
let cancel = document.querySelector("#cancelbtn");
let books_content = document.querySelector("#books_content");
let form = document.querySelector("#form");
let book_title = document.querySelector("#book_title");
let author = document.querySelector("#author");
let category = document.querySelector("#category");
let price = document.querySelector("#price");
let date = document.querySelector("#date");
let publisherName = document.querySelector("#publisherName");
let rate = document.querySelector("#rate");
let add_btn = document.querySelector("#add_btn");
let loadingBtn = document.querySelector("#loading");
let booksCard = document.querySelectorAll(".Delete");

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

const api = "https://bookshelter-a8a58-default-rtdb.firebaseio.com/ ";
let arr3 = [];
function getAllBooks() {
  renderBooks([], true);
  fetch(`${api}/books.json`)
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((res) => {
      let arr1 = Object.keys(res).map((item) => {
        return {
          ...res[item],
          id: item,
        };
      });
      console.log(arr1);
      arr1 = arr3;
      renderBooks(arr1, false);
    });
  // console.log(arr3);
  // booksCard.forEach((item) => {
  //   item.addEventListener("click", deleteCard);
  // });
}

getAllBooks();

function renderBooks(arr, loading) {
  let result = loading
    ? `<div class="spinner-border" role="status">
  <span class="sr-only"></span>
</div>`
    : "";
  arr.forEach((element) => {
    result += ` 
    <div class="cost">
    <img src="./img/garri.webp" alt="" class="garri" />
    <div>
    <h3>${element.title}</h3>
   
      <p>by  ${element.author}, et al. | Apr 24, ${element.year}</p>
      <img src="./img/i.png" alt="i" />
      <p>Cost: ${element.desc}sum</p>
      <div class="button">
        <button class="Edit">Edit</button>
        <button class="Delete" onclick="deleteCard()">Delete</button>
      </div>
    </div>
  </div>
   `;
  });
  books_content.innerHTML = result;
}
function showModal() {
  modalOpen.classList.toggle("active");
}

function sendData(e) {
  e.preventDefault();
  const bookObj = {
    author: author.value,
    title: book_title.value,
    category: category.value,
    date: date.value,
    author: author.value,
    publisherName: publisherName.value,
    rate: rate.value,
  };
  fetch(`${api}/books.json`, {
    method: "POST",
    body: JSON.stringify(bookObj),
  })
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((res) => {
      console.log(res);
      add_btn.classList.remove("d-none");
      loadingBtn.classList.add("d-none");
      showModal();
    });
}
function showCategoryOptions() {
  let result = "";
  categoryOptions.forEach((item) => {
    result += ` <option value="${item.value}">${item.name}</option>`;
    category.innerHTML = result;
  });
}

// function deleteCard() {
//   console.log(this);
// }
showCategoryOptions();
add.addEventListener("click", showModal);
cancel.addEventListener("click", showModal);
form.addEventListener("submit", sendData);

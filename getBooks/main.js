let add = document.querySelector("#add");
let edit = document.querySelector("#put");
let get = document.querySelector("#get");

class Books {
  constructor(
    title,
    author,
    publisheryear,
    nameofPublisher,
    categories,
    price
  ) {
    this.title = title;
    this.author = author;
    this.publisheryear = publisheryear;
    this.nameofPublisher = nameofPublisher;
    this.categories = categories;
    this.price = price;
  }
}

function SendData() {
  const nameBook = new Books(
    "Python",
    "David M.",
    2009,
    "Holman",
    "Documentry",
    60000
  );
  fetch("https://books-13505-default-rtdb.firebaseio.com/books.json", {
    method: "POST",
    body: JSON.stringify(nameBook),
  })
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

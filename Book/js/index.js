const books_orders = document.querySelector("#books_orders");

class Books {
  constructor(
    title,
    author,
    publishyear,
    price,
    desc,
    nameOfPublisher,
    categories,
    pageCount
  ) {
    this.title = title;
    this.author = author;

    this.publishyear = publishyear;
    this.nameOfPublisher = nameOfPublisher;
    this.categories = categories;

    this.pageCount = pageCount;
    this.desc = desc;
    this.price = price;
  }
}

function sendData() {
  const nameBook = new Books(
    "Python",
    "David M. Beazley",
    2009,
    50000,
    // _,
    "HOLLMAN"
  );

  const obj = {
    name: "Bod",
  };

  obj["name"];

  fetch("https://bookshelter-a8a58-default-rtdb.firebaseio.com/books.json", {
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

function editOneBook() {
  const id = "-NJB9aWEFJ5tbTWGfNbw";
  const nameBook = new Books(
    "Edited",
    "David M. Beazley",
    2009,
    50000,
    // _,
    "HOLLMAN"
  );
  fetch(`https://bookshelter-a8a58-default-rtdb.firebaseio.com/books.json`, {
    method: "GET",
    //   body: JSON.stringify(nameBook),
  })
    .then((res) => {
      if (!res.ok) throw res;

      return res.json();
    })
    .then((res) => {
      let arr2 = Object.keys(res).map((item) => {
        return { ...res[item], id: item };
      });

      console.log(arr2);
      renderBooks(arr2);

    })
    .catch((err) => {
      console.log(err);
    });
}

editOneBook();

function renderBooks(arr) {
  let result = "";
  arr.forEach((element) => {
    console.log(element);
    result += `
    <div class="card" style="width: 18rem">
    <div class="bg-white p-3">
      <div class="p-2 bg-light">
        <img
          src="./img/python.png"
          class="p-3 card-img-top"
          alt="..."
        />
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-subtitle mb-2 text-muted">${element.author}</p>
      <p class="card-subtitle mb-2 text-muted">${element.publishyear}</p>
      <div class="button-group d-flex gap-1 mb-1">
        <button type="button" class="w-50 btn btn-warning">
          Bookmarks
        </button>
        <button
          type="button"
          class="w-50 btn btn-light butn"
          onclick="showModal"
        >
          More Info
        </button>
      </div>
      <button type="button" class="w-100 btn btn-secondary">
        Go somewhere
      </button>
    </div>
  </div>`;
  });

  books_orders.innerHTML = result;
}

function showModal() {
  console.log(document.getElementById("backdrop"));
  document.getElementById("backdrop").classList.add("active");
}

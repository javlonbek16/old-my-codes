let login = document.querySelector(".login");
let form = document.querySelector("#form");
let passwordInput = document.querySelector(".password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = login.value.trim();
  let password = passwordInput.value.trim();

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  fetch("https://reqres.in/api/login", options)
    .then((res) => res.json)
    .then((data) => {
      if (data?.token) {
        window.localStorage.setItem("token", data.token);
        window.location.replace("../admin.html");
      } else {
        window.location.replace("../books.html");
      }
    });
});

// let url = "https://bookshelter-a8a58-default-rtdb.firebaseio.com/";

// let add = document.querySelector(".add");
// let get = document.querySelector(".get");
// let edit = document.querySelector(".put");

// class Books {
//   constructor(
//     title,
//     author,
//     year,
//     desc,
//     published,
//     categorys,
//     pageCount,
//     price
//   ) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.price = price;
//     this.published = published;
//     this.desc = desc;
//     this.categorys = categorys;
//     this.pageCount = pageCount;
//   }
// }

// function senData() {
//   const newBook = new Books("Python", "David M", 2009, 50000, "Holman");
//   fetch("https://bookshelter-a8a58-default-rtdb.firebaseio.com/books.json", {
//     method: "POST",
//     body: JSON.stringify(newBook),
//   })
//     .then((res) => {
//       if (!res.ok) throw res;
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// // senData();

// function editOneBook() {
//   const id = "-NJTlSGCsUfTMbe-xu4x";
//   const newBook = new Books("edited", "David M", 2009, 50000, "Holman");

//   fetch(`https://bookshelter-a8a58-default-rtdb.firebaseio.com/books/.json`, {
//     method: "GET",
//     // body: JSON.stringify(newBook),
//   })
//     .then((res) => {
//       if (!res.ok) throw res;
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//      let arr2 = Object.keys(res).map((item) => {
//         console.log({ ...res[item], id: item });
//         return {
//           ...res[item],
//           id: item,
//         };
//         console.log(arr2);
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// editOneBook();
// // add.addEventListener("click", senData);
// // edit.addEventListener("click", editOneBook);

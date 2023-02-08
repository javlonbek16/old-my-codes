// let bookmarkBtn = document.querySelector(".book-link");
// let moreInfo = document.querySelector(".link-info");
// let read = document.querySelector(".link-read");
// let htmlBook = document.querySelector(".books-list");
// let bookmark = document.querySelector(".bookmark");
// let moreRead = document.querySelector(".link-read");
// let arr = [];
// let result = "...Loading";
// let url = "https://www.googleapis.com/books/v1/volumes?q=search+terms";

// // const books = [];
// // fetch(`${url}/title`)
// //   .then((res) => res.json())
// //   .then((data) => {
// //     console.log(books.push(data));
// //   });

// // function found(searchWord, books) {
// //   return books.filter((book) => {
// //     const regex = new RegExp(searchWord, "gi");
// //     return book.book.match(regex);
// //   });
// // }

// // function foundBook() {
// //   const matchArray = found(searchInput.value, books);
// //   const html = matchArray.forEach((item) => {
// //     const regex = new RegExp(searchInput.value, "gi");
// //     return `
// //     <li class="list-item">
// //     <div class="book-img-wrapper">
// //       <img
// //         src="${item.img}"
// //         alt="random img"
// //         class="book-img"
// //       />
// //     </div>
// //     <h3 class="book-title">img</h3>
// //     <p class="book-info">img</p>
// //     <span class="book-span">img</span>
// //     <div class="link-wrapper">
// //       <button class="book-link">Bookmark</button>
// //       <button class="link-info">More Info</button>
// //     </div>
// //     <button class="link-read">Read</button>
// //   </li>
// //       `;
// //   });
// //   htmlBook.innerHTML = html;
// // }

// // const searchInput = document.querySelector(".search");
// // searchInput.addEventListener("change", foundBook);

// function getIn() {
//   let arr = [];

//   fetch(url, {
//     method: "GET",
//   })
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((res) => {
//       arr = res;
//       javob = "";
//       arr.data.forEach((item) => {
//         javob += `
//         <li class="list-item">
//         <div class="book-img-wrapper">
//           <img
//             src="${item}"
//             alt="random img"
//             class="book-img"
//           />
//         </div>
//         <h3 class="book-title">${item}</h3>
//         <p class="book-info">${item}</p>
//         <span class="book-span">${item}</span>
//         <div class="link-wrapper">
//           <button class="book-link">Bookmark</button>
//           <button class="link-info">More Info</button>
//         </div>
//         <button class="link-read">Read</button>
//       </li>
//         `;
//       });
//     })
//     .catch(() => {
//       javob = "<p>Error</p>";
//     })
//     .finally(() => {
//       htmlBook.innerHTML = javob;
//     });
//   htmlBook.innerHTML = javob;
// }
// getIn();

import { Books } from "./books.js";
const books_content = document.querySelector("#books_content");

export class BooksApi {
  constructor(api, arr3) {
    this.api = api;

    this.arr3 = arr3;
  }

  getAllBooks() {
    Books.renderBooks(this.arr3, true, books_content);

    fetch(`${this.api}/books.json`)
      .then((res) => {
        if (!res.ok) throw res;

        return res.json();
      })
      .then((res) => {
        if (!res) Books.renderBooks(this.arr3, false, books_content);
        else {
          let arr2 = Object.keys(res).map((item) => {
            return {
              ...res[item],
              id: item,
            };
          });

          this.arr3 = arr2;

          Books.renderBooks(this.arr3, false, books_content);
        }
      });
  }
}

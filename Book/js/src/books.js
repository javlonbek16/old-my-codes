import { priceFormatter as formatter } from "../utils/helpers.js";

export class Books {
  constructor(author, title, price, category, date, publisherName, rate) {
    this.author = author;
    this.title = title;
    this.price = price;
    this.category = category;
    this.date = date;
    this.publisherName = publisherName;
    this.rate = rate;
  }

  static renderBooks(arr, loading, books_content) {
    let result = loading
      ? `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
      : arr.length === 0
      ? "<p>No content</p>"
      : "";

    arr.forEach((element) => {
      result += `
        <div class="cost">
        <img src="./img/garri.webp" alt="" class="garri" />
        <div>
        <h3>${element.title}</h3>
          <p>
           ${element.desc}
          </p>
          <p>by  ${element.author}, et al. | Apr 24, ${element.publishyear}</p>
          <img src="./img/i.png" alt="i" />
          <p>Cost: ${element.price} so'm</p>
          <div class="button">
            <button class="Edit" onclick="editCard('${
              element.id
            }')">Edit</button>
            <button class="Delete" onclick="deleteCard('${
              element.id
            }')" >Delete</button>
          </div>
        </div>
      </div>
        
F
        `;
    });
    console.log(result);

    books_content.innerHTML = result;
  }
}

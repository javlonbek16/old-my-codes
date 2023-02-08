const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    cities.push(...data);
    pagination();
  });

function found(searchWord, cities) {
  return cities.filter((city) => {
    const regex = new RegExp(searchWord, "gi");
    return city.city.match(regex) || city.state.match(regex);
  });
}

function foundCity() {
  const matchArray = found(searchInput.value, cities);
  const html = matchArray.map((city) => {
    const regex = new RegExp(searchInput.value, "gi");
    const cityName = city.city.replace(
      regex,
      `<span class="hl">${searchInput.value}</span>`
    );
    const stateName = city.state.replace(
      regex,
      `<span class="hl">${searchInput.value}</span>`
    );
    return `
        <li class="names">
          <span class="name">${cityName} ${stateName}</span>
        </li>
      `;
  });
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", foundCity);
searchInput.addEventListener("keyup", foundCity);

//======Pagination=====//

const names = document.querySelector(".names");
const pageNume = document.querySelector(".numbers");
const limit = 100;

function pagination() {
  const countPage = Math.ceil(cities.length / limit);
  renderPages(countPage);
}

function renderPages(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += `  
    <li class="names" onclick="nameSlice(${i + 1})">${i + 1}>
    <span class="name">${cityName} ${stateName}</span>
  </li>`;
    console.log(result);
    pageNume.innerHTML = result;
  }
}
function nameSlice(page) {
  let startToSlice = page * limit - limit;
  const arr2 = names.slice(startToSlice, limit * page);
  let result = "";
  arr2.forEach((item) => {
    result += `<li>${item}</li>`;
  });
  names.innerHTML = result;
}

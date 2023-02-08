let malumot = document.querySelector("#info");

function getIn() {
  let arr = [];

  let javob = "<p>Loading...</p>";
  fetch("https://reqres.in/api/users?page=1", {
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      // if (!res.ok) throw new Error("Error");
      return res.json();
    })
    .then((res) => {
      newArray = res;
      javob = "";
      newArray.data.forEach((item) => {
        javob += `
        <li>
        <p>${item.id}</p>
        <span>${item.email}</span>
        <h3>${item.first_name}</h3>
        <div>${item.last_name}</div> 
    </li>
        `;
      });
    })
    .catch(() => {
      javob = "<p>Error</p>";
    })
    .finally(() => {
      malumot.innerHTML = javob;
    });
  malumot.innerHTML = javob;
}
getIn();

function sendData() {
  const id = 5;
  const data = {
    post_title: "hello",
    post_desc: "info",
    created_at: new Date(),
    comments: [],
  };
  fetch("", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) throw res;
      return res.json;
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

sendData();



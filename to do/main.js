let userName = document.querySelector("#userName");
let userPasword = document.querySelector("#userPasword");

function getToken() {
  const form = new FormData();
  form.append("username", "user123");
  form.append("password", "user123456");

  fetch("https://task.samid.uz/v1/user/sign-in", {
    method: "POST",
    body: form,
    headers: {
      AUTHORIZATION: "Bearer",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      //   console.log(res);
      localStorage.setItem("token", res.data.token);
    });
}
getToken();

// function getItem() {
//   fetch("https://task.samid.uz/v1/task", {
//     method: "GET",
//   })
//     .then((res) => {
//       if (!res.ok) throw res;
//       return res.json;
//     })
//     .then((res) => {
//       console.log(res);
//     });
// }

// getItem();

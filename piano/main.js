
const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`.audio[data-key="${e.keyCode}"]`);
  if (key) {
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
});

keys.forEach((item) => {
  item.addEventListener("transitionend", (e) => {
    e.target.classList.remove("playing");
  });
});



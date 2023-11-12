
let s = document.getElementById("sun");
const star = document.getElementById("star");
const m = document.getElementById("m");
let isSun = true;
// Function to toggle between sun and moon images
function sun() {
  if (isSun) {
    s.src = "moon.png";
    star.src = "meteor.png";
    m.src = "splash.png";
    m.classList.add("motion");
    star.classList.add("move");
    document.body.style.backgroundColor = "#222222";
  } else {
    s.src = "sun.png";
    m.src = " ";
    document.body.style.backgroundColor = "white";
  }
  // Toggle the
  isSun = !isSun;
}

const pElement = document.querySelector("p");
pElement.innerHTML =
  "0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0 01 0 1 0 1 0  1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1";
function randomText() {
  var text = "01010";
  var letter = text[Math.floor(Math.random() * text.length)];
  return letter;
}

function rain() {
  let cloud = document.querySelector(".cloud");
  let e = document.createElement("div");
  let left = Math.floor(Math.random() * 310);
  let size = Math.floor(Math.random() * 1.5);
  let duration = Math.random() * 1;
  e.classList.add("text");
  cloud.appendChild(e);
  e.innerText = randomText();
  e.style.left = left + "px";
  e.style.fontSize = 0.5 + size + "em";
  e.style.animationDuration = 1 + duration + "s";

  setTimeout(function () {
    cloud.removeChild(e);
  }, 2000);
}

setInterval(function () {
  rain();
}, 20);








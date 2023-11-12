const mE = document.getElementById("moon");
const bgE = document.getElementById("bg");
let isSun = true;
function m() {
  if (isSun) {
    mE.src = "./images/sun.png";

    bgE.style.backgroundColor = "white";
  } else {
    mE.src = "./images/full-moon.png";

    bgE.style.backgroundColor = "black";
  }
  isSun = !isSun;
}

function c() {
  mE.src = "./images/full-moon.png";
  bgE.style.backgroundColor = "black";
}



const displayElement = document.getElementById("display");
const iconElement = document.getElementById("icon");
const iconElement1 = document.getElementById("icon1");
const screenElement = document.getElementById("screen");

const list = iconElement1.classList;



function On() {
  displayElement.textContent = "Welcome";
  iconElement.src = "appleW.png";
  iconElement1.src = "";
  list.add("size");
  iconElement.classList.add("size");
}

function icon() {
  iconElement1.src = "";
  iconElement.src = "appleB.png";
  screenElement.style.backgroundColor = "rgb(123, 187, 219)";
  displayElement.textContent = "";
  list.add("size");
  iconElement.classList.add("size");
}

function Ai() {
  iconElement1.src = "./Images/cpu.png";
  iconElement.src = "";
  screenElement.style.backgroundColor = "Black";
  displayElement.textContent = "";
  iconElement1.classList.add("large");
}
function ML() {
  iconElement1.src = "./Images/ai.png";
  iconElement1.classList.add("large");
  screenElement.style.backgroundColor = "Black";
  displayElement.textContent = "Machine Learning";
}

function Of(){
    iconElement1.src = "./Images/satelite.png";
    iconElement.src = "./Images/rocket.png";
    list.add("myStyle");
    iconElement1.classList.add("large");
    iconElement.classList.add("smallStyle");
    displayElement.textContent = "";

}
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const body = document.querySelector("body");
const btn = document.querySelector("#btn");

function handlebtn() {
  const chosenColors = colors[Math.floor(Math.random() * colors.length)];
  const chosenColorsTwo = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundImage = `linear-gradient(to right, ${chosenColors}, ${chosenColorsTwo})`;
  console.log(handlebtn);
}

btn.addEventListener("click", handlebtn);

/*
const body = document.querySelector("body");
const btn = document.querySelector("#btn");
//function
function handlebtn() {
  const firstColor = colors[Math.floor(Math.random() * colors.length)];
  const secondColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundImage = `linear-gradient(to right, ${firstColor}, ${secondColor})`;
  //console.log(changeBgColor);
}
btn.addEventListener("click", handlebtn);
*/

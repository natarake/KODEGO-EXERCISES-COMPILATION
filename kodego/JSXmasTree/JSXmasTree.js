let height = prompt(
  "Please enter a number between 20 and 24 to make a xmasTree"
);
const star = " |*| ";

for (let i = 0; i < height; i++) {
  document.write(`<p class="xmasTree"> ${star.repeat(i + 1)} </p>`);
}

const colorGenTree = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  // console.log(`rgb(${red},${green},${blue})`);
  document.getElementById(
    "rgbValuesTree"
  ).innerHTML = `Xmas Tree = rgb(${red},${green},${blue})`;
  let xmasTree = document.querySelectorAll(".xmasTree");
  let index = 0;
  let length = xmasTree.length;

  for (index = 0; index < length; index++) {
    xmasTree[index].style.color = `rgb(${red},${green},${blue})`;
  }
};

const colorGenText = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  document.getElementById(
    "rgbValuesText"
  ).innerHTML = `Merry Xmas = rgb(${red},${green},${blue})`;

  let flashText = document.getElementById("flashText");
  flashText.style.color = `rgb(${red},${green},${blue})`;
};

let treeInterval = prompt("Input a number divisible by 100 for Tree Interval");
let textInterval = prompt("Input a number divisible by 100 for Text Interval");
function startInterval() {
  startColor = setInterval(colorGenTree, `${treeInterval}`);
  startColor2 = setInterval(colorGenText, `${textInterval}`);
}

function stopInterval() {
  clearInterval(startColor);
  clearInterval(startColor2);
}

// setTimeout(function stopInterval() {
//   clearInterval(startColor);
//   clearInterval(startColor2);
// }, 5000)

function resetFlash() {
  window.location.reload();
}

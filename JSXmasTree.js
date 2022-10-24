let height = prompt("Please enter a number between 20 and 24 to make a xmasTree");
const star = " &nbsp*&nbsp ";

for (let i = 0; i < height; i++) {
  document.write(`<p class="xmasTree"> ${star.repeat(i + 1)} </p>`);
}

// const colorGen = () => {
//   let xmasTree = document.querySelector(".xmasTree");
//   let flashText = document.getElementById("flashText");
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   console.log(`rgb(${red},${green},${blue})`);
//   xmasTree.style.color = `rgb(${red},${green},${blue})`;
//   flashText.style.color = `rgb(${red},${green},${blue})`;
// };

const colorGenTree = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  // console.log(`rgb(${red},${green},${blue})`);
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
  let flashText = document.getElementById("flashText");
  flashText.style.color = `rgb(${red},${green},${blue})`;
};

function startTreeInterval() {
  startColor = setInterval(colorGenTree, 700);
}

function startTextInterval() {
  startColor = setInterval(colorGenText, 700);
}

function stopInterval() {
  clearInterval(startColor);
}

const hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
setInterval(randomColorGenerate, 820);

function getRandomNum() {
  return Math.floor(Math.random() * hexArr.length);
}

function randomColorGenerate() {
  let randomHexColor = "#";
  for(let i = 0; i< 6; i++)
  {
    let randomArrElement = getRandomNum();
    randomHexColor += hexArr[randomArrElement]
  }
  document.body.style.backgroundColor = randomHexColor;
}

//Caracteres:
// ABCDEFGHIJKLMNOPQRSTUVXYZ
// abcdefghijklmnopqrstuvxyz
// !\"$%&/()=?@~`\\.\';:+=^*_-
// 0123456789

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz!\"$%&/()=?@~`\\.';:+=^*_-0123456789";

let output = document.getElementById("output");

const btn_copy = document
  .getElementById("btn-copy")
  .addEventListener("click", () => {
    copyClipboard();
  });
const range_value = document
  .getElementById("length")
  .addEventListener("input", (element) => {
    genPassword(element.target.value);
  });

const btn_random = document
  .getElementById("btn-random")
  .addEventListener("click", () => {
    //console.log(document.getElementById("length-val").innerHTML);
    genPassword(document.getElementById("length-val").innerHTML);
  });

function copyClipboard() {
  if (output.value != "") {
    output.select();
    document.execCommand("copy");
  }
}

function randomValue(value) {
  return Math.floor(Math.random() * value);
}

function genPassword(rangeValue) {
  document.getElementById("length-val").innerHTML = rangeValue;
  let str = "";
  for (i = 0; i < rangeValue; i++) {
    let random = randomValue(characters.length);
    str += characters.charAt(random);
  }
  output.value = str;
}

genPassword(document.getElementById("length-val").innerHTML);

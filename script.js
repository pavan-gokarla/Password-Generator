const password = document.querySelector("#show-password");
const input_length = document.querySelector("#input-length");
const give_length = document.querySelector("#length");
const checkUppercase = document.querySelector("#uppercase");
const checkLowercase = document.querySelector("#lowercase");
const checkNumber = document.querySelector("#numbers");
const generatorBtn = document.querySelector(".btn");
const checkSymbols = document.querySelector("#symbols");
const clickIcon = document.querySelector(".icon");
const copy = document.querySelector("#copy");
const check = document.querySelector("#check");
const copied = document.querySelector(".copied");
let password_length = 10;
let showPassword = "Your Password";
let symbols = "!@#$%^&*()_+~`{}|:'<>?<>,.?/";
checkLowercase.addEventListener("input", () => {
  generatorPassword();
});
checkUppercase.addEventListener("input", () => {
  generatorPassword();
});
checkNumber.addEventListener("input", () => {
  generatorPassword();
});
checkSymbols.addEventListener("input", () => {
  generatorPassword();
});
handleUI();
function handleUI() {
  give_length.innerHTML = password_length;
  password.innerHTML = showPassword;
}
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => console.log("Text copied to clipboard"))
    .catch((err) => console.error("Unable to copy text to clipboard", err));
}
input_length.addEventListener("input", (e) => {
  password_length = e.target.value;
  generatorPassword();
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomLowercase() {
  return String.fromCharCode(getRandomInt(97, 123));
}

function getRandomUppercase() {
  return String.fromCharCode(getRandomInt(65, 91));
}

function getRandomSymbol() {
  return symbols.charAt(getRandomInt(0, symbols.length));
}

function getRandomNum() {
  return getRandomInt(0, 9);
}
generatorBtn.addEventListener("click", () => {
  generatorPassword();
});
function generatorPassword() {
  let arr = [];
  let temp = "";
  if (checkUppercase.checked) {
    arr.push(getRandomUppercase);
  }
  if (checkLowercase.checked) {
    arr.push(getRandomLowercase);
  }
  if (checkNumber.checked) {
    arr.push(getRandomNum);
  }
  if (checkSymbols.checked) {
    arr.push(getRandomSymbol);
  }
  if (arr.length == 0) {
    for (let i = 0; i < password_length; i++) {
      temp += getRandomLowercase();
    }
    showPassword = temp;
    handleUI();
    return;
  }

  for (let i = 0; i < password_length; i++) {
    let index = getRandomInt(0, arr.length);
    temp += arr[index]();
  }
  showPassword = temp;

  handleUI();
}

clickIcon.addEventListener("click", () => {
  copyToClipboard(showPassword);
  copy.classList.add("opp");
  check.classList.remove("opp");
  copied.classList.remove("opp");
  setTimeout(() => {
    copy.classList.remove("opp");
    check.classList.add("opp");
    copied.classList.add("opp");
  }, 1500);
});

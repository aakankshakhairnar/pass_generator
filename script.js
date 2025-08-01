const passwordBox = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

// Update password when anything changes
[lengthSlider, uppercase, lowercase, numbers, symbols].forEach(el => {
  el.addEventListener("input", generatePassword);
});

function generatePassword() {
  let length = lengthSlider.value;
  lengthValue.textContent = length;

  let chars = "";
  if (uppercase.checked) chars += uppercaseChars;
  if (lowercase.checked) chars += lowercaseChars;
  if (numbers.checked) chars += numberChars;
  if (symbols.checked) chars += symbolChars;

  if (chars === "") {
    passwordBox.value = "Select at least 1 option";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomChar = chars[Math.floor(Math.random() * chars.length)];
    password += randomChar;
  }

  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
  alert("Password copied!");
}

// Initial password
generatePassword();
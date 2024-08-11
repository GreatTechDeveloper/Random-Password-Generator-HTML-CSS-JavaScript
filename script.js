const passwordBox = document.getElementById("password");
const createPassword = document.getElementById("createPassword");
const passwordLength = 12;
const allChar =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_+=-/*.|{}';:,";

const copyPassword = document.getElementById("copyPassword");

createPassword.addEventListener("click", () => {
  let password = "";

  while (password.length < passwordLength) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value = password;
});

copyPassword.addEventListener("click", () => {
  const password = passwordBox.value;
  navigator.clipboard.writeText(password).then(()=>{
    alert("Password copied to clipboard!")
  }).catch(err=> {
    console.error("Could not copy text:", err)
  })
});

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("password1")
let passTwo = document.getElementById("password2")

function generatePass(length) {
  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    generatedPassword += characters[randomIndex];
  }
  return generatedPassword;
}

function updatePasswords() {
  passOne.textContent = generatePass(15);
  passTwo.textContent = generatePass(15);
}

// ASCII Table from A to Z:


for (let i = 65; i <= 90; i++) {
  let letter = String.fromCharCode(i);   // Convert ASCII to letter
  console.log(letter + " => ASCII code: " + letter.charCodeAt(0));
}


// ASCII Table from a to z:


for (let i = 97; i <= 122; i++) {
  let letter = String.fromCharCode(i);   // Convert ASCII to letter
  console.log(letter + " => ASCII code: " + letter.charCodeAt(0));
}
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

// ⿡ What does "hello".toUpperCase() return?

let str = "hello";
console.log(str.toUpperCase());  // Output: "HELLO"

// ⿢ How can you convert "WORLD" to lowercase in JS?

let str1 = "WORLD";
console.log(str1.toLowerCase());  // Output: "world"

// ⿣ What will "JavaScript".charAt(4) return?

let str2 = "JavaScript";
console.log(str2.charAt(4));  // Output: "S"

// ⿤ How do you find the index of 'a' in "banana"?

let str3 = "banana";
console.log(str3.indexOf('a'));  // Output: 1 

// ⿥ What does "   spaced   ".trim() return?

let str4 = "   spaced   "
console.log(str4.trim());  // it will remove spaces from left and right

// ⿦ How to replace "I like JS" with "I love JS"?

let str5 = "I like JS";
console.log(str5.replace("like", "love"));  // Output: "I love JS"

// ⿧ What is the output of "hello".slice(1, 4)?

let str6 = "hello";
console.log(str6.slice(1, 4));  // Output: "ell"

// ⿨ How to check if "React" includes "act"?

let str7 = "React";
console.log(str7.includes("act"));  // Output: true

// ⿩ What is the result of "frontend".substring(0, 5)?

let str8 = "frontend";
console.log(str8.substring(0, 5));  // Output: "front"

// 🔟 How do you split "a,b,c" into an array?

let str9 = "a,b,c";
console.log(str9.split(","));  // Output: ["a", "b", "c"]

// ⿡⿡ How can you repeat the string "ha" 3 times?

let str10 = "ha";
console.log(str10.repeat(3));  // Output: "hahaha"

// ⿡⿢ What will "Hello".startsWith("He") return?

let str11 = "Hello";
console.log(str11.startsWith("He"));  // Output: true

// ⿡⿣ What does "JavaScript".endsWith("pt") give?

let str12 = "JavaScript";
console.log(str12.endsWith("pt"));  // Output: true

// ⿡⿤ How to pad "7" to "007" using padStart()?

let str13 = "7";
console.log(str13.padStart(3, '0'));  // Output: "007"

// ⿡⿥ What is the result of "abc".concat("123")?

let str14 = "abc";
console.log(str14.concat("123"));  // Output: "abc123"






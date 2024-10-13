// Checks if given word is a palindrome
// A palindrome is a word or phrase that can be read the same way backward or forward
const isPalindrom = (str) =>
  Array.from(str.toLowerCase().replace(/\W+/g, "")).reverse().join("") ===
  str.toLowerCase().replace(/\W+/g, "");

console.log("'Civic!?' is palindrome -> ", isPalindrom("Civic!?"));
console.log(
  "'Do Geese see God?' is palindrome -> ",
  isPalindrom("Do Geese see God?")
);
console.log(
  "'Cigar to go tragic...' is palindrome -> ",
  isPalindrom("Cigar to go tragic...")
);
console.log(
  "'Borrow or rob?' is palindrome -> ",
  isPalindrom("Borrow or rob?")
);
console.log(
  "'Definitely! Not! Palindrome!' is palindrome -> ",
  isPalindrom("Definitely! Not! Palindrome!")
);

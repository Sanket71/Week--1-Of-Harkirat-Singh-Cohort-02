/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let s1 = str.replace(/\s/g, "").toLowerCase();
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (
      s1[i] === "a" ||
      s1[i] === "e" ||
      s1[i] === "i" ||
      s1[i] === "o" ||
      s1[i] === "u"
    )
      count++;
  }

  return count;
}

module.exports = countVowels;

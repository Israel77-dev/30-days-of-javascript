// Day 2: Datatypes

// 1
const challenge = "30 Days of JavaScript";
// 2
console.log(challenge);
// 3
console.log("Length:", challenge.length);
// 4
console.log(challenge.toUpperCase());
// 5
console.log(challenge.toLowerCase());
// 6
console.log(challenge.substring(0, 2));
// 7
console.log(challenge.slice(3));
// 8
console.log(`Is Script in ${challenge}? `, challenge.includes("Script"));
// 9
console.log(challenge.split());
// 10
console.log(challenge.split(" "));
// 111
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(",")
);
// 12
console.log(challenge.replace("JavaScript", "Python"));
// 13
console.log(challenge.charAt(15));
// 14
console.log(challenge.charCodeAt(11));
// 15
console.log(challenge.indexOf("a"));
// 16
console.log(challenge.lastIndexOf("a"));
// 17
const sentence =
  "  You cannot end a sentence with because because because is a conjunction  ";
console.log(sentence.indexOf("because"));
// 18
console.log(sentence.lastIndexOf("because"));
// 19
console.log(sentence.search(/because/));
// 20
console.log(sentence.trim());
// 21
console.log(challenge.startsWith("30"));
// 22
console.log(challenge.endsWith("JavaScript"));
// 23
console.log(challenge.match(/a/));
// 24
console.log("30 Days of".concat("JavaScript"));
// 25
console.log(challenge.repeat(2));

/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

let names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

function spl(name) {
  return  name.startsWith('K'); 
}
let longNameThatStartsWithA = names.find(spl);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"

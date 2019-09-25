"use strict";

// const assert = require('assert');
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main(letter) {
  let counter = 0;
  let word = "hello";
  let input = null;
  solutionArr = word.split("");
  viewBoard(solutionArr);
}

function viewBoard(arr) {
  let blankArr = arr.map(letter => "_");
}

function check(w, i) {
  let position = w.indexOf(i);
  if (w.indexOf(i) !== -1) {
    blankArr[position] = i;
  } else {
    console.log(`incorrect guess`);
  }
}

function getPrompt() {
  rl.question("Guess a letter: ", letter => {
    check(letter);
    main();
    getPrompt();
  });
}

getPrompt()

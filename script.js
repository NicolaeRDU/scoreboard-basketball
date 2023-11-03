"use strict";

const teamScore = document.querySelector(".team__score");

const plusOne = document.querySelector(".button--plus__one");
const plusTwo = document.querySelector(".button--plus__two");
const plusThree = document.querySelector(".button--plus__three");
const btnDelete = document.querySelector(".button--delete");

let sum = 0;

plusOne.addEventListener("click", function () {
  sum += 1;
  teamScore.textContent = sum;
});
plusTwo.addEventListener("click", function () {
  sum += 2;
  teamScore.textContent = sum;
});
plusThree.addEventListener("click", function () {
  sum += 3;
  teamScore.textContent = sum;
});

btnDelete.addEventListener("click", function () {
  sum = 0;
  teamScore.textContent = sum;
});

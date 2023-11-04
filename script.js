"use strict";

const teamScore1 = document.querySelector(".team__score--1");
const teamScore2 = document.querySelector(".team__score--2");

const plusHosts = document.querySelector(".hosts--plus__one");
const plusTwoHosts = document.querySelector(".hosts--plus__two");
const plusThreeHosts = document.querySelector(".hosts--plus__three");
const plusGuests = document.querySelector(".guests--plus__one");
const plusTwoGuests = document.querySelector(".guests--plus__two");
const plusThreeGuests = document.querySelector(".guests--plus__three");

const btnDeleteHosts = document.querySelector(".hosts--delete");
const btnDeleteGuests = document.querySelector(".guests--delete");

const winnerShow = document.querySelector(".winner");
const btnWinner = document.querySelector(".btn--winner");

let playing = true;

let sum1 = 0;
let sum2 = 0;

if (playing) {
  plusHosts.addEventListener("click", function () {
    sum1 += 1;
    teamScore1.textContent = sum1;
  });

  plusTwoHosts.addEventListener("click", function () {
    sum1 += 2;
    teamScore1.textContent = sum1;
  });

  plusThreeHosts.addEventListener("click", function () {
    sum1 += 3;
    teamScore1.textContent = sum1;
  });

  btnDeleteHosts.addEventListener("click", function () {
    sum1 = 0;
    teamScore1.textContent = sum1;
  });

  plusGuests.addEventListener("click", function () {
    sum2 += 1;
    teamScore2.textContent = sum2;
  });

  plusTwoGuests.addEventListener("click", function () {
    sum2 += 2;
    teamScore2.textContent = sum2;
  });

  plusThreeGuests.addEventListener("click", function () {
    sum2 += 3;
    teamScore2.textContent = sum2;
  });

  btnDeleteGuests.addEventListener("click", function () {
    sum2 = 0;
    teamScore2.textContent = sum2;
  });
}

btnWinner.addEventListener("click", function () {
  playing = false;
  if (sum1 > sum2) {
    winnerShow.textContent = `Hosts have won`;
  } else if (sum1 < sum2) {
    winnerShow.textContent = `Hosts has won`;
  } else winnerShow.textContent = `Draw`;
  console.log(playing);
});

"use strict";

const team1 = document.querySelector("#team--1");
const team2 = document.querySelector("#team--2");

const teamScore1 = document.querySelector(".team__score--1");
const teamScore2 = document.querySelector(".team__score--2");

const buttonsAddScore = document.querySelectorAll(".btn");
const btnDeleteHosts = document.querySelector(".hosts--delete");
const btnDeleteGuests = document.querySelector(".guests--delete");
const btnReset = document.querySelector(".btn--reset");

const winnerShow = document.querySelector(".winnerAnnouncement");
const btnWinner = document.querySelector(".btn--winner");

let playing = true;

let sumHosts = 0;
let sumGuests = 0;

buttonsAddScore.forEach((btn) =>
  btn.addEventListener("click", function () {
    if (playing) {
      if (btn.classList.contains("hosts--plus-one")) {
        sumHosts += 1;
        teamScore1.textContent = sumHosts;
      } else if (btn.classList.contains("guests--plus-one")) {
        sumGuests += 1;
        teamScore2.textContent = sumGuests;
      }

      if (btn.classList.contains("hosts--plus-two")) {
        sumHosts += 2;
        teamScore1.textContent = sumHosts;
      } else if (btn.classList.contains("guests--plus-two")) {
        sumGuests += 2;
        teamScore2.textContent = sumGuests;
      }

      if (btn.classList.contains("hosts--plus-three")) {
        sumHosts += 3;
        teamScore1.textContent = sumHosts;
      } else if (btn.classList.contains("guests--plus-three")) {
        sumGuests += 3;
        teamScore2.textContent = sumGuests;
      }
    }
  })
);

btnDeleteHosts.addEventListener("click", function () {
  if (playing) {
    sumHosts = 0;
    teamScore1.textContent = sumHosts;
  }
});

btnDeleteGuests.addEventListener("click", function () {
  if (playing) {
    sumGuests = 0;
    teamScore2.textContent = sumGuests;
  }
});

btnWinner.addEventListener("click", function () {
  playing = false;
  if (sumHosts > sumGuests) {
    winnerShow.textContent = `Hosts have won`;
    team1.classList.add("winner");
    team2.classList.add("losser");
  } else if (sumHosts < sumGuests) {
    winnerShow.textContent = `Guests have won`;
    team2.classList.add("winner");
    team1.classList.add("losser");
  } else {
    winnerShow.textContent = `Draw`;
    team1.classList.add("draw");
    team2.classList.add("draw");
  }
});

btnReset.addEventListener("click", function () {
  playing = true;

  sumHosts = 0;
  sumGuests = 0;

  teamScore1.textContent = teamScore2.textContent = 0;

  team1.classList.remove("draw");
  team2.classList.remove("draw");
  team1.classList.remove("winner");
  team2.classList.remove("winner");
  team1.classList.remove("losser");
  team2.classList.remove("losser");

  winnerShow.textContent = "";
});

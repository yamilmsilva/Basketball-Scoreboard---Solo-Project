/*//Selectors
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");
let resetHomeScore = document.getElementById("reset-home-score");
let resetGuestScore = document.getElementById("reset-guest-score");

let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");

// === Button Function - Home === \\

// Button - 1 - Home

homeScoreBtnOne.addEventListener("click", function () {
  homeScore.textContent++;
});

// Button - 2 - Home

homeScoreBtnTwo.addEventListener("click", function () {
  homeScore.textContent = Number(homeScore.textContent) + 2;
});

// Button - 3 - Home

homeScoreBtnThree.addEventListener("click", function () {
  homeScore.textContent = Number(homeScore.textContent) + 3;
});

// Reset - Home

resetHomeScore.addEventListener("click", function () {
  homeScore.textContent = 0;
});

// === Button Function - Guest === \\

// Button - 1 - Guest

guestScoreBtnOne.addEventListener("click", function () {
  guestScore.textContent++;
});

// Button - 2 - Guest

guestScoreBtnTwo.addEventListener("click", function () {
  guestScore.textContent = Number(guestScore.textContent) + 2;
});

// Button - 3 - Guest

guestScoreBtnThree.addEventListener("click", function () {
  guestScore.textContent = Number(guestScore.textContent) + 3;
});

// Reset - Guest

resetGuestScore.addEventListener("click", function () {
  guestScore.textContent = 0;
});*/

//Selectors

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");

let resetHomeScore = document.getElementById("reset-home-score");

let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");

let resetGuestScore = document.getElementById("reset-guest-score");

// === Button Function - Home === \\

// Button - 1 - Home
homeScoreBtnOne.addEventListener("click", function () {
  homeScore.textContent++;
});


// Button - 2 - Home
homeScoreBtnTwo.addEventListener("click", function () {
  homeScore.textContent = Number(homeScore.textContent) + 2;
});


// Button - 3 - Home
homeScoreBtnThree.addEventListener("click", function () {
  homeScore.textContent = Number(homeScore.textContent) + 3;
});


// Reset - Home
resetHomeScore.addEventListener("click", function () {
  homeScore.textContent = 0;
});

// === Button Function - Guest === \\

// Button - 1 - Guest
guestScoreBtnOne.addEventListener("click", function() {
  guestScore.textContent++;
});


// Button - 2 - Guest
guestScoreBtnTwo.addEventListener("click", function () {
  guestScore.textContent = Number(guestScore.textContent) + 2; 
});


// Button - 3 - Guest
guestScoreBtnThree.addEventListener("click", function () {
  guestScore.textContent = Number(guestScore.textContent) + 3;
});

// Reset - Guest
resetGuestScore.addEventListener("click", function() {
  guestScore.textContent = 0;
});
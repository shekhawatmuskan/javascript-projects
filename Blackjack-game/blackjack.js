let firstcard = 11;
let secondcard = 11;
let sum = firstcard + secondcard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

// if (sum < 21) {
//   console.log("Do you want to draw a new card?");
// } else if (sum === 21) {
//   console.log("Wohoo! You've got the Blackjack!");
// } else {
//   console.log("You're out of the game!");
// }

if (sum <= 20) {
  message = "Do you want to draw a new card?";
} else if (sum === 21) {
  message = "Wohoo! You've got the Blackjack!";
  hasBlackjack = true;
} else {
  message = "You're out of the game!";
  isAlive = false;
}

console.log(message);

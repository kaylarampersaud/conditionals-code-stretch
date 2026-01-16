let answer = 3;

answerInput = prompt(`Guess The Number`);

answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("ENTER NUMBER VALUES ONLY!");
} else if (answer === 3) {
  alert("You Guessed Correct!");
} else if (answer > 3) {
  alert("Your guess is too high");
} else if (answer < 3) {
  alert("Your guess is too low");
}

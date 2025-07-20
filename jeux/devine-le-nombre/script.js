let secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.getElementById("guess");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submit");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restart");

submitBtn.addEventListener("click", () => {
  const guess = parseInt(input.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "⛔ Entrez un nombre entre 1 et 100.";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Essais : ${attempts}`;

  if (guess < secret) {
    message.textContent = "📉 Trop petit !";
  } else if (guess > secret) {
    message.textContent = "📈 Trop grand !";
  } else {
    message.textContent = `🎉 Bravo ! Le nombre était ${secret}.`;
    submitBtn.disabled = true;
    input.disabled = true;
    restartBtn.style.display = "inline-block";
  }
});

restartBtn.addEventListener("click", () => {
  secret = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  input.value = "";
  input.disabled = false;
  submitBtn.disabled = false;
  message.textContent = "";
  attemptsDisplay.textContent = "Essais : 0";
  restartBtn.style.display = "none";
});
const emojis = [
  "🥰",
  "🥰",
  "😭",
  "😭",
  "🥴",
  "🥴",
  "🤡",
  "🤡",
  "👽",
  "👽",
  "💛",
  "💛",
  "☕",
  "☕",
  "🐮",
  "🐮",
];
let openCards = [];

let timer = document.querySelector(".counter");
let counter = 30;
timer.textContent = counter;
let counterCountdown = 0;

function startCountDown() {
  counterCountdown = setInterval(countDown, 1000);
}

function countDown() {
  if (counter > 0) {
    counter--;
    timer.textContent = counter;
  } else {
    alert("Game Over!");
    clearInterval(counterCountdown);
  }
}

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  // reset the vector/list
  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    counter = 0; // stop the counter!
    alert("Você venceu!");
  }
}

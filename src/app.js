
// import dependencies;
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Const Changes //
const suits=["♦", "♥", "♣", "♠"];
const numbers=["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Card Random Function //
const cardRandom = () => {
  
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  
  const card = document.querySelector(".card");
  const suit = document.querySelectorAll(".suit");
  const number = document.querySelector(".number");
  
  card.classList.remove("red", "black");

  if (randomSuit === "♦" || randomSuit === "♥") {
    card.classList.toggle("red");
  } else {
    card.classList.toggle("black");
  }

  suit.forEach(elem => { elem.innerHTML = randomSuit; });
  number.innerHTML = randomNumber;
}
// Event Listener Load Website //
window.onload = () => {

  cardRandom();

};

// Event Listener Button //
const buttonChange = () => {

  const button = document.querySelector("#button");
  button.addEventListener("click", () => {
    cardRandom();
  });
};
buttonChange();

// Event Listener Inputs //
const withdChange = () => {

  const widht = document.querySelector("#card-widht");
  const height = document.querySelector("#card-height");

  widht.addEventListener("input", () => {
    const card = document.querySelector(".card");
    card.style.width = `${widht.value}px`;
  });

  height.addEventListener("input", () => {
    const card = document.querySelector(".card");
    card.style.height = `${height.value}px`;
  });
};
withdChange();

// Counter 10 seconds //
const changeCardCounter = () => {

  let counterSeconds = 11;

  setInterval(() => {

    if (counterSeconds <= 0) {
      cardRandom();
      counterSeconds = 11;
    }
  
    counterSeconds--;
    const time = document.querySelector("#time");
    time.innerHTML = counterSeconds;}, 1000);
};
changeCardCounter();

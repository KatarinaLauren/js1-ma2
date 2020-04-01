// Question 1

const myFunctionExpression = function() {
  console.log("Katarina Lauren");
};

// Question 2

const button = document.querySelector(".btn");

function buttonClicked() {
  console.log("I was clicked");
}

button.addEventListener("click", buttonClicked);

// Question 3

const selectedInput = document.querySelector("#firstName");

function keyPressed(whichKey) {
  console.log(whichKey.key);
}

selectedInput.addEventListener("keydown", keyPressed);

// Question 4

const hoverButton = document.querySelector("button");

function addClass(event) {
  event.target.classList.add("hover");
}
hoverButton.addEventListener("mouseover", addClass);

// Question 5

const theButton = document.querySelector("[data-animal='dog']");

function removeClass(removal) {
  removal.target.classList.remove("hover");
}

theButton.addEventListener("mouseout", removeClass);

// Question 6

const animalList = document.querySelectorAll("li");

for (let i = 0; i < animalList.length; i++) {
  animalList[i].addEventListener("mouseover", logAttribute);
}

function logAttribute(theAnimal) {
  console.log(theAnimal.target.dataset.animal);
}

// Question 7

const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("tweet");
    break;
  default:
    console.log("Harrumph");
}

// Question 8

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
  console.log(sheep);
});

// Question 9

function logWord() {
  console.log("Hello");
  if (counter === 5) {
    clearInterval(stopTimer);
  }
  counter++;
}
let counter = 0;

const stopTimer = setInterval(logWord, 500);

// Question 10

const theContainer = document.querySelector("div.container");

function updateText() {
  theContainer.innerHTML = "Text updated";
}

setTimeout(updateText, 2000);

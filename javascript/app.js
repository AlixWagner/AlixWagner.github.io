// eventListener for click on cards to flip
// SECONDARY EVENTlISTENER FOR KEYPRESS!
// toggle "flip" class - rotateY 180deg
// NOTE TO SELF --- CSS backface-visibility: hidden and transform-style: preserve-3d

// event listener on click of down arrow to scroll to about

// event listener on click of back to top arrow

// PLEASE CONSIDER --- stretch goal --- blobs (.floatingBubblegit checkout) jiggle on click



const cards = document.querySelectorAll(".projectCard");

function flipCard(event) {
    this.classList.toggle("flip");
};

cards.forEach((card) => card.addEventListener("click", flipCard));

// establish App Object:
const myPortfolio = {};


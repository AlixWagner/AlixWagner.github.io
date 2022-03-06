// eventListener for click on cards to flip
// SECONDARY EVENTlISTENER FOR KEYPRESS!
// toggle "flip" class - rotateY 180deg
// NOTE TO SELF --- CSS backface-visibility: hidden and transform-style: preserve-3d

// event listener on click of down arrow to scroll to about

// event listener on click of back to top arrow

// PLEASE CONSIDER --- stretch goal --- blobs (.floatingBubblegit checkout) jiggle on click

// create App object:
const portfolio = {};

// establish variables:
portfolio.cards = document.querySelectorAll(".projectCard");
portfolio.menuButton = document.querySelector(".menuIcon");
portfolio.menuIcon = document.querySelector(".hamburgerMenuIcon")
portfolio.menu = document.querySelector(".mainMenu");
portfolio.submitMessage = document.querySelector(".messageSent");
portfolio.form = document.querySelector("form");
portfolio.formA = document.querySelector("#userEmail");
portfolio.formB = document.querySelector("#userComment");
portfolio.formC = document.querySelector("#userName");

// establish general methods:
portfolio.fadeIn = function (element, interval) {
    let opacity = 0
    element.style.opacity = opacity;
    element.style.display = 'flex';
    const fade = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(fade);
        }
        opacity = opacity + 0.1
        element.style.opacity = opacity;
    }, interval);
};
portfolio.fadeOut = function (element, interval) {
    let opacity = 1
    element.style.opacity = opacity;
    const fade = setInterval(function () {
        if (opacity <= 0) {
            clearInterval(fade);
            element.style.display = 'none';
        }
        opacity = opacity - 0.1
        element.style.opacity = opacity;
    }, interval);
};

// PROJECT CARD CODE ---
// toggle "flipped":
portfolio.flipCard = function(event) {
    this.classList.toggle("flip");
};
// establish evenListeners on cards:
portfolio.cards.forEach((card) => card.addEventListener("click", portfolio.flipCard));

// HAMBURGER MENU CODE ---
// toggle "open":
portfolio.toggleMenu = function () {
    portfolio.menuIcon.classList.toggle("open");
    portfolio.menu.classList.toggle("open");
};
// establish EventListeners:
portfolio.menuButton.addEventListener("click", portfolio.toggleMenu);
portfolio.menu.addEventListener("click", portfolio.toggleMenu);

// FORM SUBMIT CODE ---


portfolio.form.addEventListener("submit", function (e) {
    e.preventDefault();
    const userName = portfolio.formC.value;
    const insertName = document.querySelector(".insertName");
    insertName.textContent = userName;
    setTimeout(function() {
        portfolio.formA.value = "";
        portfolio.formB.value = "";
        portfolio.formC.value = "";
        portfolio.fadeIn(portfolio.submitMessage, 10);
    }, 100)
})

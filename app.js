
/* _____DICE BUTTONS_____*/

const diceButton = document.querySelector("#diceButton");
const tarotButton = document.querySelector("#tarotButton");

const menu = document.querySelector(".menu");
const diceScreen = document.querySelector("#diceScreen");

const backFromDice = document.querySelector("#backFromDice");
const rollDice = document.querySelector("#rollDice");

const diceResult = document.querySelector("#diceResult");
const diceVisual = document.querySelector("#diceVisual");

const diceTitle = document.querySelector("#diceTitle");
const diceOptions = document.querySelectorAll(".dice-option");

let selectedDice = 20;
document.querySelector('[data-sides="20"]').classList.add("selected");

diceOptions.forEach((option) => {

    option.addEventListener("click", () => {

        selectedDice = Number(option.dataset.sides);

        diceTitle.textContent = `D${selectedDice}`;

        diceOptions.forEach((button) => {
            button.classList.remove("selected");
        });

        option.classList.add("selected");

        diceResult.textContent = "?";
    });

});

diceButton.addEventListener("click", () => {

    menu.style.display = "none";
    diceScreen.style.display = "block";

});


backFromDice.addEventListener("click", () => {

    diceScreen.style.display = "none";
    menu.style.display = "flex";

});

rollDice.addEventListener("click", () => {

    rollDice.disabled = true;

    diceVisual.classList.add("rolling");

    let rolls = 0;

    const animation = setInterval(() => {

        const randomNumber =
            Math.floor(Math.random() * selectedDice) + 1;

        diceResult.textContent = randomNumber;

        rolls++;

        if (rolls >= 12) {

            clearInterval(animation);

            const finalResult =
                Math.floor(Math.random() * selectedDice) + 1;

            diceResult.textContent = finalResult;

            diceVisual.classList.remove("rolling");

            rollDice.disabled = false;
        }

    }, 80);

});

/*______TAROT DECK____*/

const tarotDeck = [
    {
        name: "The Fool",
        arcana: "Major Arcana",
        number: 0
    },
    {
        name: "The Magician",
        arcana: "Major Arcana",
        number: 1
    },

    // ...
];
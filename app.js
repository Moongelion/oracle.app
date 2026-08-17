
/* _____DICE & TAROT BUTTONS_____*/

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
    {
        name: "The High Priestess",
        arcana: "Major Arcana",
        number: 2
    },
    {
        name: "The Empress",
        arcana: "Major Arcana",
        number: 3
    },
    {
        name: "The Emperor",
        arcana: "Major Arcana",
        number: 4
    },
    {
        name: "The Hierophant",
        arcana: "Major Arcana",
        number: 5
    },
    {
        name: "The Lovers",
        arcana: "Major Arcana",
        number: 6
    },
    {
        name: "The Chariot",
        arcana: "Major Arcana",
        number: 7
    },
    {
        name: "Strength",
        arcana: "Major Arcana",
        number: 8
    },
    {
        name: "The Hermit",
        arcana: "Major Arcana",
        number: 9
    },
    {
        name: "Wheel of Fortune",
        arcana: "Major Arcana",
        number: 10
    },
    {
        name: "Justice",
        arcana: "Major Arcana",
        number: 11
    },
    {
        name: "The Hanged Man",
        arcana: "Major Arcana",
        number: 12
    },
    {
        name: "Death",
        arcana: "Major Arcana",
        number: 13
    },
    {
        name: "Temperance",
        arcana: "Major Arcana",
        number: 14
    },
    {
        name: "The Devil",
        arcana: "Major Arcana",
        number: 15
    },
    {
        name: "The Tower",
        arcana: "Major Arcana",
        number: 16
    },
    {
        name: "The Star",
        arcana: "Major Arcana",
        number: 17
    },
    {
        name: "The Moon",
        arcana: "Major Arcana",
        number: 18
    },
    {
        name: "The Sun",
        arcana: "Major Arcana",
        number: 19
    },
    {
        name: "Judgement",
        arcana: "Major Arcana",
        number: 20
    },
    {
        name: "The World",
        arcana: "Major Arcana",
        number: 21
    }
];

const suits = [
    "Wands",
    "Cups",
    "Swords",
    "Pentacles"
];

const ranks = [
    "Ace",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Page",
    "Knight",
    "Queen",
    "King"
];

suits.forEach((suit) => {

    ranks.forEach((rank) => {

        tarotDeck.push({
            name: `${rank} of ${suit}`,
            arcana: "Minor Arcana"
        });

    });

});

/*______TAROT SCREEN______*/

const tarotScreen = document.querySelector("#tarotScreen");
const backFromTarot = document.querySelector("#backFromTarot");
const drawCard = document.querySelector("#drawCard");
const tarotName = document.querySelector("#tarotName");
const tarotCard = document.querySelector("#tarotCard");

tarotButton.addEventListener("click", () => {

    menu.style.display = "none";
    tarotScreen.style.display = "block";

});

backFromTarot.addEventListener("click", () => {

    tarotScreen.style.display = "none";
    menu.style.display = "flex";

});

drawCard.addEventListener("click", () => {

    tarotCard.classList.remove("drawn");

    const randomIndex =
        Math.floor(Math.random() * tarotDeck.length);

    const card = tarotDeck[randomIndex];

    tarotName.textContent = card.name;

    void tarotCard.offsetWidth;

    tarotCard.classList.add("drawn");

});
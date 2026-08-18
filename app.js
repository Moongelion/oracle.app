
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
        number: 0,
        image: "thefool.png"
    },
    {
        name: "The Magician",
        arcana: "Major Arcana",
        number: 1,
        image: "themagician.png"
    },
    {
        name: "The High Priestess",
        arcana: "Major Arcana",
        number: 2,
        image: "highpriestess.png"
    },
    {
        name: "The Empress",
        arcana: "Major Arcana",
        number: 3,
        image: "theempress.png"
    },
    {
        name: "The Emperor",
        arcana: "Major Arcana",
        number: 4,
        image: "theemperor.png"
    },
    {
        name: "The Hierophant",
        arcana: "Major Arcana",
        number: 5,
        image: "sumo.png"
    },
    {
        name: "The Lovers",
        arcana: "Major Arcana",
        number: 6,
        image: "thelovers.png"
    },
    {
        name: "The Chariot",
        arcana: "Major Arcana",
        number: 7,
        image: "thechariot.png"
    },
    {
        name: "Strength",
        arcana: "Major Arcana",
        number: 8,
        image: "strength.png"
    },
    {
        name: "The Hermit",
        arcana: "Major Arcana",
        number: 9,
        image: "thehermit.png"
    },
    {
        name: "Wheel of Fortune",
        arcana: "Major Arcana",
        number: 10,
        image: "thefortune.png"
    },
    {
        name: "Justice",
        arcana: "Major Arcana",
        number: 11,
        image: "thejustice.png"
    },
    {
        name: "The Hanged Man",
        arcana: "Major Arcana",
        number: 12,
        image: "thehangedman.png"
    },
    {
        name: "Death",
        arcana: "Major Arcana",
        number: 13,
        image: "death.png"
    },
    {
        name: "Temperance",
        arcana: "Major Arcana",
        number: 14,
        image: "temperance.png"
    },
    {
        name: "The Devil",
        arcana: "Major Arcana",
        number: 15,
        image: "thedevil.png"
    },
    {
        name: "The Tower",
        arcana: "Major Arcana",
        number: 16,
        image: "thetower.png"
    },
    {
        name: "The Star",
        arcana: "Major Arcana",
        number: 17,
        image: "thestar.png"
    },
    {
        name: "The Moon",
        arcana: "Major Arcana",
        number: 18,
        image: "themoon.png"
    },
    {
        name: "The Sun",
        arcana: "Major Arcana",
        number: 19,
        image: "thesun.png"
    },
    {
        name: "Judgement",
        arcana: "Major Arcana",
        number: 20,
        image: "judgement.png"
    },
    {
        name: "The World",
        arcana: "Major Arcana",
        number: 21,
        image: "theworld.png"
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
const tarotImage = document.querySelector("#tarotImage");
const tarotCard = document.querySelector("#tarotCard");

tarotButton.addEventListener("click", () => {

    menu.style.display = "none";
    tarotScreen.style.display = "block";

});

backFromTarot.addEventListener("click", () => {

    tarotCard.classList.add("reset");
    tarotCard.classList.remove("flipped");

    tarotName.textContent = "?";

    tarotScreen.style.display = "none";
    menu.style.display = "flex";

});

drawCard.addEventListener("click", () => {

    tarotCard.classList.add("reset");
    tarotCard.classList.remove("flipped");

    void tarotCard.offsetWidth;

    const randomIndex =
        Math.floor(Math.random() * tarotDeck.length);

    const card = tarotDeck[randomIndex];

    tarotName.textContent = card.name;

    if (card.image) {

        tarotImage.src = `assets/tarot/${card.image}`;
        tarotImage.alt = card.name;
        tarotImage.style.display = "block";

    } else {

        tarotImage.style.display = "none";

    }

    tarotCard.classList.remove("reset");

    void tarotCard.offsetWidth;

    tarotCard.classList.add("flipped");

});
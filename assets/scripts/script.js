const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";

let techs = [
    "bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "node",
    "react",
];

let cards = null;

const startGame = () => {
    let cards = createCards(techs);
    shuffle(cards);

    initializeCards(cards);
};

const initializeCards = (cards) => {
    let gameBoard = document.getElementById("gameBoard");

    cards.forEach((card) => {
        let cardElement = document.createElement("div");
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener("click", flipCard);
        gameBoard.appendChild(cardElement);
    });
};

const createCardContent = (card, element) => {
    createCardFace(FRONT, card, element);
    createCardFace(BACK, card, element);
};

const createCardFace = (face, card, element) => {
    let cardElementFace = document.createElement("div");
    cardElementFace.classList.add(face);
    if (face === FRONT) {
        let iconElement = document.createElement("img");
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);
    } else {
        iconElement = document.createElement("img");
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/images/back.png";
        cardElementFace.appendChild(iconElement);
    }
    element.appendChild(cardElementFace);
};

const shuffle = (cards) => {
    let index = cards.length;
    let randomIndex = 0;

    while (index !== 0) {
        randomIndex = Math.floor(Math.random() * index);
        index--;

        [cards[randomIndex], cards[index]] = [cards[index], cards[randomIndex]];
    }
};

const createCards = (techs) => {
    let cards = []; //array vazio que recebe todas as Cards

    techs.forEach((tech) => {
        cards.push(createPair(tech));
    });

    return cards.flatMap((pair) => pair); //separa os elementos no array
};

const createPair = (tech) => {
    return [{
            id: createId(tech),
            icon: tech,
            flipped: false,
        },
        {
            id: createId(tech),
            icon: tech,
            flipped: false,
        },
    ];
};

const createId = (tech) => {
    return tech + parseInt(Math.random() * 1000);
};

const flipCard = () => {
    console.log(this);
    //this.classList.add("flip");
};

startGame();
const FRONT = "card_front";
const BACK = "card_back";

let techs = [
  "bootstrap",
  "css",
  "electron",
  "firebase",
  "html",
  "javascript",
  "jquerry",
  "mongo",
  "node",
  "react",
];

let cards = null;

const startGame = () => {
    let cards = createCards(techs);
    shuffle(cards);
    console.log(cards);
};


const shuffle = (cards) => {
    let index = cards.length;
    let randomIndex = 0;
    
    while (index !== 0){
        randomIndex = Math.floor(Math.random() * index);
        index--;
        
        [cards[randomIndex], cards[index]] = [cards[index], cards[randomIndex]];
    }
};

const createCards = (techs) => {
    let cards = []; //array vazio que recebe todas as Cards
    
    for (let tech of techs) {
        cards.push(createPair(tech)); //pega cada elemento e gera o seu par
    }
    
    return cards.flatMap((pair) => pair); //separa os elementos no array
};

const createPair = (tech) => {
    return [
        {
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

startGame();
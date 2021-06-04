const FRONT = 'card_front'
const BACK = 'card_back'

let techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquerry',
    'mongo', 
    'node', 
    'react'
];

const criaCartas = (techs) => {
    
    let cards=[];

    for (let tech of techs){
        cards.push(criaPar(tech));
    }

    console.log(cards);
}

const criaPar = (tech) =>{
    return [{
        id: geraId(tech),
        icon: tech,
        flipped: false,
    }, {
        id: geraId(tech),
        icon: tech,
        flipped: false,        
    }]
}

const geraId = (tech) => {
    return tech + parseInt(Math.random()*1000);
}

criaCartas(techs);
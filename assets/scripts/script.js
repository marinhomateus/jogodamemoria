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
    
    let cards=[];//array vazio que recebe todas as cartas

    for (let tech of techs){ 
        cards.push(criaPar(tech));  //pega cada elemento e gera o seu par
    }

    console.log(cards.flatMap(pair => pair)); //separa os elementos no array
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
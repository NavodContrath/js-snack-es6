/*
Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
 */

//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const displayEl = document.querySelector(".card-body")
console.log(displayEl);

const bikes = [{
    name: 'BMX',
    weight: 10,
}, {
    name: 'mountain-bike',
    weight: 15,
}, {
    name: 'race-bike',
    weight: 6,
}, {
    name: 'city-bike',
    weight: 12,
}, {
    name: 'bike',
    weight: 7.5,
}, {
    name: 'gravel-bike',
    weight: 10,
}, {
    name: 'folding bicycle',
    weight: 15,
}, {
    name: 'tandem',
    weight: 20,
}, {
    name: 'cross-bike',
    weight: 12,
}, {
    name: 'elctrick-bikes',
    weight: 20,
}
]
//Stampare a schermo la bici con peso minore.
let result = bikes[0]
for (let i = 0; i < bikes.length; i++) {
    const thisBike = bikes[i];
    /* weightBikes.push(thisBike.weight) */
    if (thisBike.weight < result.weight) {
        result = thisBike
    }
}
displayEl.innerText = `${result.name} is the least heavy of them all and it weighs only ${result.weight}kg`
//solution with another for loop and array
/* 
let weightBikes = []

let result = weightBikes[0]
for (let i = 0; i < weightBikes.length; i++) {
    const thisWeight = weightBikes[i];
    if (thisWeight < result) {
        result = thisWeight
    }
} */



/* 
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
const soccerTeams = [{
    name: 'Milan',
    points: 0,
    fouls: 0,
}, {
    name: 'Inter',
    points: 0,
    fouls: 0,
}, {
    name: 'Juve',
    points: 0,
    fouls: 0,
}, {
    name: 'Napoli',
    points: 0,
    fouls: 0,
}, {
    name: 'Roma',
    points: 0,
    fouls: 0,
},
]
//creiamo un nuovo array 
const nameAndFouls = []
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
for (let i = 0; i < soccerTeams.length; i++) {
    const thisTeam = soccerTeams[i];
    thisTeam.points = Math.floor(Math.random() * 10)
    thisTeam.fouls = Math.floor(Math.random() * 10)
    //push nel nuovo array
    nameAndFouls.push(`${thisTeam.name}: ${thisTeam.fouls}`)
}
//stampiamo tutto in console
console.log(soccerTeams);
console.log(nameAndFouls);






/*
Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
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
let weightBikes = []
for (let i = 0; i < bikes.length; i++) {
    const thisBike = bikes[i];
    weightBikes.push(thisBike.weight)
}
console.log(weightBikes[0]);
let result = weightBikes[0]
for (let i = 0; i < weightBikes.length; i++) {
    const thisWeight = weightBikes[i];
    console.log(thisWeight);
    if (thisWeight < result) {
        result = thisWeight
    }
}
console.log(result);





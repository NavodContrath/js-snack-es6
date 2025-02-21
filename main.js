/*
Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
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
//solution with another for loop
let result = weightBikes[0]
for (let i = 0; i < weightBikes.length; i++) {
    const thisWeight = weightBikes[i];
    if (thisWeight < result) {
        result = thisWeight
    }
}
console.log(result);
//Solution with math min
const solution = Math.min.apply(null, weightBikes)
console.log(solution);







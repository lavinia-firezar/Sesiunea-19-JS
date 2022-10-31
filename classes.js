// 1. Creeaza o clasa care poate fi folosita pentru a crea mai multe ferme. Fiecare ferma va contine un id, o locatie si un array cu animale. Fiecare animal are nume si cantitate (deci practic un animal va fi un obiect).
// Clasa va contine si doua metode:
// 1. listAnimals: metoda va afisa la consola un sir de caractere, ce contine toate animalele din ferma.
// EX: farm1.listAnimals() => "Ferma contine urmatoarele animale: cal, gaina, pisica, pe care le iubim foarte mult!"
// 2. listRareAnimals: metoda va afisa la consola un sir de caractere, care va contine numele tuturor animalelor ale caror cantitate este mai mica decat 5.
// EX: farm1.listRareAnimals() => "Avem si animale rare: alpaca, caine de prerie, le tratam cu mare grija!"

// Creeaza minim 2 ferme, care sa contina cel putin 3 animale.

class Farm {
    constructor(id, location, animals) {
        this.id = id;
        this.location = location;
        this.animals = animals;
    } 

     listAnimals() {
        let animalsList = '';
        let listFunction = (animal) => {
            animalsList = animalsList + animal.name + ',';
        }
        this.animals.forEach(listFunction);
        const message = `The farm contains the following animals: ${animalsList} that we love very much!`;
        console.log(message);
     }

     listRareAnimals() {
        let animalsRareList = '';
        let callbackFunction = (animal) => {
            if(animal.quantity < 5) {
                 animalsRareList = animalsRareList + animal.name + ',';
            }
        }
        this.animals.forEach(callbackFunction);
        console.log('Also we have wild animals :' ,animalsRareList ,'we treat them with great care!')
     }
}

const animals1 = [
    {
        name:'pig',
        quantity:4
    },
    {
        name:'sheep',
        quantity:20
    },
    {
        name:'goose',
        quantity:15
    }
];

const animals2 = [
    {
        name:'fox',
        quantity:4
    },
    {
        name:'wild boar',
        quantity:2
    },
    {
        name:'deer',
        quantity:7
    }
];

let farm1 = new Farm( 121, 'Oradea', animals1 );
farm1.listAnimals();
console.log(farm1);
let farm2 = new Farm( 123, 'Timisoara', animals2);
farm2.listRareAnimals();
console.log(farm2);

// 2. Se da urmatorul array:
const salaries = [2300, 5000, 3500];
// Sa se creeze o metoda disponibila pe orice array (hint: prototype), numita sum, care atunci cand este apelata calculeaza suma elementelor din array.
// EX: salaries.sum() => 10800;
Array.prototype.sum = function() {
    let sum = 0;
    for(let i = 0; i < this.length; i++) {
        sum = sum + this[i];
    }
    return sum;
    
}
console.log(salaries.sum());

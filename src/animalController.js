const inform = console.log
const animalPoints = require("../data/animalPoints.json");
const { nanoid } = require("nanoid");
// const points  = require("../data/animalPoints.json")
// const points = readJSONFile("../data/animalPoints.json")
///CRUD APP
/* C reate
    R ead
    U pdate
    D estroy 
    */

// Index = READing (All of the data in a collection)
function index(arrOfAnimals) {
    return arrOfAnimals.map((eachAnimal) => eachAnimal.id + " " + eachAnimal.name).join("\n");
}

// function show(animals, animalId) {
//     const animal = animals.find((animal) => animal.id === animalId);
//     return animal.id + " " + animal.name + " " + animal.points + " points";
//   }
function showbyName(arrOfAnimals, animalId) {
    const animalToFind = arrOfAnimals.find((eachAnimal) => eachAnimal.name == animalId);
    // console.log(arrOfAnimals)
    return animalToFind.id + " " + animalToFind.name + " " + animalToFind.points + " points";

}

function create(animals, animalName, animalPoints) {
    const newAnimal = {
        name: animalName, id: nanoid(4),
        points: animalPoints
    };


    animals.push(newAnimal);
    return animals;

}



function destroy(animals, animalId) {
    const index = animals.findIndex((animal) => animal.id === animalId);
    if (index > -1) {
        animals.splice(index, 1);
        inform("Animal successfully removed from collection");
        return animals;
    } else {
        inform("Animal not found. No action taken");
        return animals;
    }
}


function edit(animals, animalId, updatedAnimal) {
    const index = animals.findIndex((animal) => animal.id == animalId);
    if (index > -1) {
        animals[index].id = animalId;
        animals[index].name = updatedAnimal;
        animals[index].points = Math.random() * 10.25 ;
        inform("Animal successfully updated")
        // console.log(givenAnimalPoints)
        ;
        return animals;
    } else {
        inform("Animal not found. No action taken");
        return animals;
    }
}

module.exports = {
    index,
    showbyName,
    edit,
    create,
    destroy
}
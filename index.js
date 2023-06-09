const { writeInJSONFile, readJSONFile } = require("./src/helpers")
// const {}
const { index, showbyName, create, destroy, edit } = require("./src/animalController")
// console.log("= >.< =")
const inform = console.log

function run() {

    // console.log("Process Object", process)
    // console.log("List Of Arguments for this process.argv", process.argv)

    inform("Welcome to my CrudBased App ! 🌹✨ \n")

    let animals = readJSONFile("data","animals.json")
    // let points = readJSONFile("data", "animalPoints.json")
    // console.log(animals)

    const action = process.argv[2]; // What was typed in by the user?
    const animal = process.argv[3];
    const animalPoints = process.argv[4]

    let writeToFile = false;  // Have we done an Action that will "write" to Our JSON File
    let updatedAnimals = [];

    switch (action) {
    //     case "index":
    //         inform(action, animals);
    //         break;
    //     case "create":
    //         inform(action, animal);
    //         break;
    //     case "show":
    //         inform(action, animal);
    //         break;
    //     case "update":
    //         inform(action, animal);
    //         break;
    //     case "destroy":
    //         inform(action, animal);
    //         break;
    //     case "score":
    //         inform(action);
    //         break;
    //     default:
    //         inform("There was an error.");
    // }
    // switch (action) {

        case "index":
            // animals.map((eachAnimal)=> {console.log(eachAnimal)})
            const animalsView = index(animals);
            inform(animalsView);
            break;

        case "show":
            const animalViewShow = showbyName(animals, animal);
            inform(animalViewShow);
            break;

        case "create":
            updatedAnimals = create(animals, animal, animalPoints);
            writeToFile = true
            inform(`${animal} was created`);
            break;


        case "update":
            updatedAnimals = edit(animals, animal, process.argv[4]);
            writeToFile = true;
            break;

        case "destroy":
            updatedAnimals = destroy(animals, animal);
            writeToFile = true;
            break;


        case "score":
            const score = animals.reduce((acc, curr) => acc + curr.points, 0);
            inform("Current score", score);
            break;

        default:
            inform("Hey, we can't do that Fam :(");
    }

    if (writeToFile) {
        writeInJSONFile("./data", "animals.json", updatedAnimals);
    }

}
run()
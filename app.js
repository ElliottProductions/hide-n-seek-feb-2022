// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

const treeGuesses = document.getElementById('tree-guesses');
const boulderGuesses = document.getElementById('boulder-guesses');
const shedGuesses = document.getElementById('shed-guesses');

const treeCorrects = document.getElementById('tree-corrects');
const boulderCorrects = document.getElementById('boulder-corrects');
const shedCorrects = document.getElementById('shed-corrects');


let correctGuesses = 0;
let totalGuesses = 0;
let treeG = 0;
let boulderG = 0;
let shedG = 0;
let shedC = 0;
let boulderC = 0;
let treeC = 0;



shedButton.addEventListener('click', () => {

    shedG += 1
    // get a random item to call the 'correct spot'
 
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess('shed', getRandomHidingSpot());
});

treeButton.addEventListener('click', () => {

    treeG += 1
    // get a random item to call the 'correct spot'

    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess('tree', getRandomHidingSpot());
});

boulderButton.addEventListener('click', () => {

    boulderG += 1
    // get a random item to call the 'correct spot'

    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess('boulder', getRandomHidingSpot());
});


function getRandomHidingSpot() {
    // initialize state
    const hidingPlaces = [
        'tree',
        'shed',
        'boulder'
    ];

    const index = Math.floor(Math.random() * hidingPlaces.length);

    // use the random index above and the array of hidingPlaces to get a random hiding place string
    const correctHidingPlace = `${hidingPlaces[index]}`;
    
    // return that random hiding place string
    return correctHidingPlace;
}

function handleGuess(userGuess, correctSpot) {
    // first, right after clicking, we need to remove the emoiji face from the previous hiding place that way we don't end up with more than one emoji face
    shedContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    // we can do that by removing the .face class from all containers

    // then increment the guesses
    totalGuesses++;
    // then use getElementById and the correctSpot string to grab the appropriate container from the DOM
    const correctHidingSpot = document.getElementById(`${correctSpot}-container`);
    //console.log(correctHidingSpot);
    // then add the .face css class to that element so that the face shows up
    correctHidingSpot.classList.add('face');
    // then if the user guess is correct, increment the correct guesses
    if(correctSpot === userGuess){
        correctGuesses++
        if(correctSpot === 'shed'){
            shedC++
        }else if(correctSpot === 'tree'){
            treeC++
        }else if(correctSpot === 'boulder'){
            boulderC++
        }
    }
    // update the DOM to show the new value of wins, losses and total guesses to the user
    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;

    shedGuesses.textContent = shedG
    boulderGuesses.textContent = boulderG
    treeGuesses.textContent = treeG

    shedCorrects.textContent = shedC
    boulderCorrects.textContent = boulderC
    treeCorrects.textContent = treeC
    

}
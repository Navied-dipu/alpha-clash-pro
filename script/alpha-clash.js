// function play(){
//     // hide the home screen 
//     const homeElement=document.getElementById('home-screen');
//     homeElement.classList.add('hidden');

//     // add play 
//     const playGround=document.getElementById('play-ground')
//  playGround.classList.remove('hidden')
// }

function handelKeyboardButtonPress(event){
    const playerPressed= event.key.toLowerCase();
// console.log(playerPressed);
// if player press 'esc' game end
console.log(playerPressed);
if(playerPressed === 'escape'){
    final();
}

// got expected to pres
const currentAlphabetElement=document.getElementById('current-alphabet');
const currentAlphabet=currentAlphabetElement.innerText;
const expectedAlphabet=currentAlphabet.toLowerCase();
// console.log(playerPressed , expectedAlphabet);

if(playerPressed === expectedAlphabet){
// score
const currentScorePoint=getTextElementValueById('current-score');
const newScore=currentScorePoint + 1;
setTextElementValueById('current-score', newScore)



// const currentScorePoint=document.getElementById('current-score')
// const currentScoreValue=currentScorePoint.innerText;
// const currentScore=parseInt(currentScoreValue);

// // new score
// const newScore=currentScore + 1;
// // show new score
// currentScorePoint.innerText=newScore;

    // start a new round
    removeBackgroundColor(expectedAlphabet)
    continueGame()
}
else{

    const lifeScore= getTextElementValueById('life-score');
    const updatedLife= lifeScore - 1;
    setTextElementValueById('life-score', updatedLife)

//     const lifeScore=document.getElementById('life-score');
//     const lifeScoreValue=lifeScore.innerText;
// const lifeScorePoint=parseInt(lifeScoreValue);
// // new score
// const newScore=lifeScorePoint - 1;
// // show life
// lifeScore.innerText=newScore;
// console.log('you lost a life');

if(updatedLife === 0){
    final()
  
}
}
}
document.addEventListener('keyup', handelKeyboardButtonPress)

function  continueGame(){
const alphabet=getARandomAlphabet();
const currentAlphabet=document.getElementById('current-alphabet')
currentAlphabet.innerText=alphabet;
setBackgroundColor(alphabet)
}
function play(){
    hideElementsById('score')
    hideElementsById('home-screen');
    showElementById('play-ground');
    continueGame()

    // reset the game
    setTextElementValueById('life-score', 5)
    setTextElementValueById('current-score', 0)
}


function final(){
hideElementsById('play-ground');
showElementById('score')

const lastScore=getTextElementValueById('current-score');
setTextElementValueById('final-score', lastScore)

const currentAlphabet=getElementTextById('current-alphabet')
// console.log(currentAlphabet);
removeBackgroundColor(currentAlphabet)
}
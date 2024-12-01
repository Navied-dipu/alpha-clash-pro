// function play(){
//     // hide the home screen 
//     const homeElement=document.getElementById('home-screen');
//     homeElement.classList.add('hidden');

//     // add play 
//     const playGround=document.getElementById('play-ground')
//  playGround.classList.remove('hidden')
// }

function handelKeyboardButtonPress(event){
    const playerPressed= event.key
// console.log(playerPressed);

// got expected to pres
const currentAlphabetElement=document.getElementById('current-alphabet');
const currentAlphabet=currentAlphabetElement.innerText;
const expectedAlphabet=currentAlphabet.toLowerCase();
console.log(playerPressed , expectedAlphabet);

if(playerPressed === expectedAlphabet){
// score
const currentScorePoint=document.getElementById('current-score')
const currentScoreValue=currentScorePoint.innerText;
const currentScore=parseInt(currentScoreValue)

// new score
const newScore=currentScore + 1;
// show new score
currentScorePoint.innerText=newScore

    // start a new round
    removeBackgroundColor(expectedAlphabet)
    continueGame()
}
else{
    const lifeScore=document.getElementById('life-score');
    const lifeScoreValue=lifeScore.innerText;
const lifeScorePoint=parseInt(lifeScoreValue);
// new score
const newScore=lifeScorePoint - 1;
// show life
lifeScore.innerText=newScore;
console.log('you lost a life');
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
    hideElementsById('home-screen');
    showElementById('play-ground');
    continueGame()
}
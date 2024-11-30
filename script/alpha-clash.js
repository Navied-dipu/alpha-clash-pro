// function play(){
//     // hide the home screen 
//     const homeElement=document.getElementById('home-screen');
//     homeElement.classList.add('hidden');

//     // add play 
//     const playGround=document.getElementById('play-ground')
//  playGround.classList.remove('hidden')
// }

function continueGame(){
const alphabet=getARandomAlphabet();
const currentAlphabet=document.getElementById('current-alphabet')
currentAlphabet.innerText=alphabet;
}
function play(){
    hideElementsById('home-screen');
    showElementById('play-ground');
    continueGame()
}
function hideElementsById(elementId){
const element=document.getElementById(elementId)
element.classList.add('hidden');
}

function showElementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('hidden')
}
 function setBackgroundColor(elementId){
const element= document.getElementById(elementId)
element.classList.add('bg-yellow-400');
 }
 function removeBackgroundColor(elementId){
const element= document.getElementById(elementId)
element.classList.remove('bg-yellow-400');
 }



// play-ground
function getARandomAlphabet(){
    // get an alphabet array
const alphabetString='abcdefghijklmnopqrstuvwxyz';
const alphabets=alphabetString.split('');
// get a random alphabet 0-25
const randomNumber=Math.random()*25;
const index=Math.round(randomNumber)
const alphabet=alphabets[index];
return alphabet;
}
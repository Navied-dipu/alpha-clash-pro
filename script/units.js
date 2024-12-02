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

// value set
function getTextElementValueById(elementId){
    const element= document.getElementById(elementId)
    elementValueText=element.innerText
    const value= parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementId, value){
    const element=document.getElementById(elementId);
    element.innerText=value;
}

// background remove
function getElementTextById(elementId){
    const element=document.getElementById(elementId)
    const text= element.innerText
return text;
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
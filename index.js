//Initializing some values
let totalAttempts =5;
let attempts = 0;
let won = 0;
let lost = 0;
// finding or selecting elements
const form = document.querySelector('form');
const cardBody = document.querySelector(".card-body");
const guessingNumber = document.querySelector("#gessingNumber");
const checkButton = document.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
const winLostMessage  = document.createElement("p");
form.addEventListener("submit",function(){
    event.preventDefault();
    //console.log(gessingNumber.value);
    attempts++;
    if(attempts>5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    else
    {
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML = `Remaining Attempts ${totalAttempts-attempts}`;
    }

    if(attempts==5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }

    guessingNumber.value = "";
});

function checkResult(guessingNumber)
{
    //console.log(guessingNumber);
    const randomNumber = getRandomNumber(5);
    //console.log(randomNumber);
    if(guessingNumber == randomNumber)
    {
        resultText.innerHTML = `You have won! `; 
        won++;
    }
    else{
        resultText.innerHTML = `You have lost! Random number was: ${randomNumber}`;
        lost++;
    }
    winLostMessage.innerHTML = `Won: ${won} , Lost: ${lost}`;
    winLostMessage.classList.add("large-text");
    cardBody.appendChild(winLostMessage);
}

function getRandomNumber(limit)
{
    return Math.floor(Math.random() * limit) + 1;
}
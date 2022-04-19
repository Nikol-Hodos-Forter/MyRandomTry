// / TODO: You have to generate a random number between 1 - 10, set it as a variable with the name chosenNumber,
// //  After that, get the input from the user, check if it's the chosen number, if its not the number - toast error,
// //  else toast win with the amount of trys he took to get the number.
// //  if the user chose a number thats bigger tell him that the number is lower, else tell him its higher.

// 1.   get the element
  // 2.   validate that the number is in the range +
  // 3.   let the user know if the number greater lower or equals +

var chosenNumber = Math.floor(Math.random() * 10) + 1;
var numberOfAttempts = 0; 

function submitNumber(){
  var number = document.getElementById("inputNumber").value;

  var isInputValid = validateInput(number);
  if (isInputValid == false){
    return;
  }

  numberOfAttempts++;
  giveUserFeedback(number);

}

function validateInput(number){
  if (number < 1 || number > 10){
    alert('Invalid number!');
    return false;
  }
}

function giveUserFeedback(number){
  if (number < chosenNumber){
    alert ('Please pick a higher number');
    return false;
  }
  if (number > chosenNumber){
    alert ('Please pick a lower number');
    return false;
  }
  if (number = chosenNumber){
    alert ('Correct, you guessed it right! it took you ' + numberOfAttempts + ' attempts');
    clearVariables();
    return true;
  }  
}

function clearVariables(){
  numberOfAttempts = 0;
  chosenNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById("inputNumber").value = '';
}
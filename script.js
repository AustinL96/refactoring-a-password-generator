// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector('#password');

function showPassword(characterList) {
  passwordText.innerText = characterList;
}

// Contains arrays for all character types, final output (characterList) is
// a String to avoid commas //
function generatePassword(totalOptions) {
  var lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specChars = ['!', '@', '#', '$', '%', '^', '&', '*', '?'];

  var characterChoices = [];
  var characterList = '';

  if (totalOptions.lowerChars) {
      characterChoices = characterChoices.concat(lowerChars);
  }
  if (totalOptions.upperChars) {
      characterChoices = characterChoices.concat(upperChars);
  }
  if (totalOptions.numChars) {
    characterChoices = characterChoices.concat(numChars);
  }
  if (totalOptions.specChars) {
    characterChoices = characterChoices.concat(specChars);
  }
  for (var index = 0; index < totalOptions.amount; index++){
      var randomSelection = characterChoices[Math.floor(Math.random() * characterChoices.length)];
      characterList = characterList + randomSelection;
  }
  showPassword(characterList);
}

// Contains prompt code and confirmation buttons, renamed "writePassword" 
// to "getOptions" to signify getting options for your password generation
function getOptions() {
  var wantsLowercase = confirm('Would you like lowercase letters in your password?');
  var wantsUppercase = confirm('Would you like uppercase letters in your password?');
  var wantsNumerics = confirm('Would you like numbers in your password?');
  var wantsSpecials = confirm('Would you like special characters in your password?');
  var characterAmount = prompt('Between 8 and 128, how many characters would you like the password to be?');
  var finalAmount = parseInt(characterAmount);
  
  var options = {
      lowerChars: wantsLowercase,
      upperChars: wantsUppercase,
      numChars: wantsNumerics,
      specChars: wantsSpecials,
      amount: finalAmount,
  };

  generatePassword(options);
}

// Add event listener to generate button
generateBtn.addEventListener("click", getOptions);

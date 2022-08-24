// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var upperCase = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
var lowerCase = 'qwertyuioplkjhgfdsazxcvbnm';
var specialChar = '`~!@#$%^&*()-_=+[{]}\|;:",<.>/?';
var numChar = '1234567890';

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

// Write password to the #password input
function writePassword() {
  var generatePassword = function(){
    var numOfChars = Number(prompt('How long do you want your password to be?'))
    if (isNaN(numOfChars)){
      alert('Not a number!');
    }
    else {
      if(numOfChars >= 8 && numOfChars <= 128){
        var selCharType = '';
        var numOfSelections = 0;
        var isUpperCaseType = confirm('Would you like to add uppercase letters to your password?');
        if(isUpperCaseType){
          selCharType = selCharType + upperCase;
          console.log(selCharType);
          numOfSelections++;
        }
        var isLowerCaseType = confirm('Would you like to add lowercase letts to your password?')
        if(isLowerCaseType){
          selCharType = selCharType + lowerCase;
          console.log(selCharType);
          numOfSelections++;
        }
        var isSpecialCharType = confirm('Would you like to add special characters to your password?')
        if(isSpecialCharType){
          selCharType = selCharType + specialChar;
          console.log(selCharType);
          numOfSelections++;
        }
        var isNumCharType = confirm('Would you like to add numbers to your password?');
        if(isNumCharType){
          selCharType = selCharType + numChar;
          console.log(selCharType);
          numOfSelections++;
        }
        if(numOfSelections >= 1){
          var password = '';
          for(var i = 0; i < numOfChars; i++){
            password = password + selCharType[getRandomInt(selCharType.length-1)];
          }
          passwordText.value = password;
        }
        else{
          alert('Must have at least one character type selected!')
        }
      }
      else{
        alert('Must be between 8 and 128!')
      }
    }
  };
  

  generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseletters= [ 'a' ,'b' ,'c' ,'d' ,'e' ,'f' ,'g' ,'h' ,'i' ,'j' ,'k', 'l', 'm' , 'n', 'o' ,'p' ,'q' ,'r' ,'s' ,'t' ,'u' ,'v', 'w', 'x' ,'y' ,'z' ]
var uppercaseletters= [ 'A' , 'B' , 'C' ,'D' ,'E' ,'F' ,'G' ,'H' ,'I' ,'J' ,'K' ,'L' , 'M' ,'N' ,'O' ,'P' ,'Q' ,'R' ,'S' ,'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 
var numbers =['1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,'0' ] 
var specialcharacters =['!' ,'@' ,'#' ,'$' ,'%' ,'^' ,'&' ,'*' ,'_' ,'-', '+' ,'(' ,')' ,]


const passwordLength = document.getElementById
const lowercaseLetters = document.getElementById
const uppercaseLetters = document.getElementById
const  numbers = document.getElementById
const specialCharacters = document.getElementById

passwordLength.addEventListener('input', syncCharacterAmount)

characterNumber.addEventListener('input')


// Write password to the #password input
function writePassword() {
  // display hidden criteria container
  var criteriaContainer = document.querySelector("#criteria-container")
  criteriaContainer.removeAttribute("hidden")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  var passwordText = document.querySelector("#password");

//   passwordText.value = password;
  passwordText.value = 'test';
}



function generatePassword() { 

  const value = e.target.value
  passwordLength.value = value 
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", e=> {
  e.writePassword ()
  const password = generatePassword (passwordLength, lowercaseLetters, uppercaseLetters, numbers, specialCharacters)
})





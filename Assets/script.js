// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseletters= [ 'a' ,'b' ,'c' ,'d' ,'e' ,'f' ,'g' ,'h' ,'i' ,'j' ,'k', 'l', 'm' , 'n', 'o' ,'p' ,'q' ,'r' ,'s' ,'t' ,'u' ,'v', 'w', 'x' ,'y' ,'z' ]
var uppercaseletters= [ 'A' , 'B' , 'C' ,'D' ,'E' ,'F' ,'G' ,'H' ,'I' ,'J' ,'K' ,'L' , 'M' ,'N' ,'O' ,'P' ,'Q' ,'R' ,'S' ,'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 
var numbers =['1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,'0' ] 
var specialcharacters =['!' ,'@' ,'#' ,'$' ,'%' ,'^' ,'&' ,'*' ,'_' ,'-', '+' ,'(' ,')' ,]


const passwordLength = document.getElementById('passwordLenggth')
const lowercaseLetters = document.getElementById('lowercaseLetters')
const uppercaseLetters = document.getElementById('uppercaseLetters')
const  numbers = document.getElementById('numbers')
const specialCharacters = document.getElementById('specialCharacters')

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



function generatePassword (passwordLength, lowercaseLetters, uppercaseLetters, numbers, specialCharacters) { 
let characters = lowercaseLetters
if characters = characters.concat(uppercaseLetters)
if characters = characters.concat(numbers)
if characters = characters.concat(specialCharacters)


const passwordLength = []
for (let i= 0 ; i < i++ ) {

  const passwordLength = 


}


const value = e.target.value

  
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", e=> {
  e.writePassword ()
  const password = generatePassword (passwordLength, lowercaseLetters, uppercaseLetters, numbers, specialCharacters)
})

function arrayFromLow


passwordLength.value = value 




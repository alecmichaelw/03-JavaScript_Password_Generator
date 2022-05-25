const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeNumbersElement = document.getElementById
('includeNumbers')
const includeSymbolsElement = document.getElementById
('includeSymbols')

const form = document.getElementById
('passwordGeneratorForm')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.Checked
  const includeNumbers = includeNumbersElement.Checked
  const includeSymbols = includeSymbolsElement.Checked
  const password = generatePassword(characterAmount, includeUppercase,
  includeNumbers, IncludeSymbols)
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  String.fromCharCode(65)
}

function fromLowToHigh(low, high) {
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}


function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

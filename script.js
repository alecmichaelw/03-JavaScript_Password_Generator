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

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.Checked
  const includeNumbers = includeNumbersElement.Checked
  const includeSymbols = includeSymbolsElement.Checked
  const password = generatePassword(characterAmount, includeUppercase,
  includeNumbers, includeSymbols)
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  console.log(LOWERCASE_CHAR_CODES)
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount, i ++) {
    const characterCode = charCodes[Math.floor(math.random() *
      characterAmount)]
    passwordCharacters.push(string.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
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


// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// // Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

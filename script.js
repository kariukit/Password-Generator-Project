const resultDOM = document.getElementById("result");
const lengthDOM = document.getElementById("length");
const uppercaseDOM = document.getElementById("uppercase");
const lowercaseDOM = document.getElementById("lowercase");
const numbersDOM = document.getElementById("numbers");
const symbolsDOM = document.getElementById("symbols");
const generatebtn = document.getElementById("generate");
const form = document.getElementById("passwordGeneratorForm");

const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126));

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

let writePassword = (
    characterAmount,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
) => {
    let charCodes = LOWERCASE_CODES;
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
    if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CODES);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
        const characterCode =
            charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join("");
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const characterAmount = lengthDOM.value;
    const includeUppercase = uppercaseDOM.checked;
    const includeLowercase = lowercaseDOM.checked;
    const includeNumbers = numbersDOM.checked;
    const includeSymbols = symbolsDOM.checked;
    const password = writePassword(
        characterAmount,
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols
    );
    resultDOM.innerText = password;
});

alert("Welcome to the password generator app. \n In order to get started, please select your desired password combination below. \n \uD83D\uDE00")
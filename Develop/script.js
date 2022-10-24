// Assignment Code
var generateBtn = document.querySelector("#generate");

function mixCharacters(low, high) {
  if (!high) {
    high = low;
    low = 0;
  }
  var mixes = Math.random();
  return Math.floor(low * (1 - mixes) + mixes * high);
}


function getMixItems(record) {
  return record[mixCharacters(record.length)];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // objects created
  var options = {
    theNumberOfCharacters: 0,
    hasSpecialCharaters: false,
    hasLowerCharacters: false,
    hasUpperCharacters: false,
    hasNumberCharacters: false,
  };
// alert created
  var length = window.prompt(
    "How many characters do you want in your password"
  );
// not a number created
  if (isNaN(length)) {
    window.prompt("you must eneter a valid number");
    return;
  }
// object linked with confirm and a message
  options.theNumberOfCharacters = length;
  // options created for customer t
  options.hasSpecialCharaters = confirm(
    "Click OK to confirm including special characters"
  );
  options.hasLowerCharacters = confirm(
    "Click OK to confirm including numeric characters"
  );
  options.hasUpperCharacters = confirm(
    "click OK to confirm including lowercase characters"
  );
  options.hasNumberCharacters = confirm(
    "Click OK to confirm including uppercase characters"
  );

  //

  //
  // arrays created for lower, upper, special and numbers

  var specialist = [
    "!",
    "@",
    "£",
    "$",
    "%",
    "^",
    "*",
    "(",
    ")",
    "-",
    "?",
    "=",
    "+",
  ];
  var lowerlist = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperlist = [];
  var numberlist = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

  var optioncharacters = [];
  // uppercase created
  for (var i = 0; i < lowerlist.length; i++) {
    upperlist[i] = lowerlist[i].toUpperCase();
  }
//
  if (options.hasSpecialCharaters === true) {
    optioncharacters.push(specialist);
  }

  if (options.hasLowerCharacters === true) {
    optioncharacters.push(lowerlist);
  }

  if (options.hasUpperCharacters === true) {
    optioncharacters.push(upperlist);
  }

  if (options.hasNumberCharacters === true) {
    optioncharacters.push(numberlist);
  }
  if (optioncharacters.length === 0) {
    optioncharacters.push(lowerlist);
  }

  // password generater
  var passwordCreater = "";

  for (var i = 0; i < length; i++) {
    var mixedRecord = getMixItems(optioncharacters);
    var mixedCharacters = getMixItems(mixedRecord);

    passwordCreater += mixedCharacters;

    return passwordCreater;

  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

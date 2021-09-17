// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  

  function substitution(input, alphabet, encode = true) {
    
    if (!alphabet || alphabet.length !== 26) {
    return false;
  }
    
    let verifyNoDuplicates = alphabet.split("").some((v, i, a) => {
    return a.lastIndexOf(v) != i;
  });
    
  if (verifyNoDuplicates === true) {
    return false;
  }
    
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let word = input.toLowerCase();
  let result = "";

  for (let i = 0; i < word.length; i++) {
    let currentChar;
    let index;

    if (encode === true) {
      currentChar = word.charAt(i);
      index = alpha.indexOf(currentChar);
      if (index === -1) {
        result += currentChar;
      } else {
        result += alphabet.charAt(index);
      }
    } else {
      currentChar = word.charAt(i);
      index = alphabet.indexOf(currentChar);
      if (index === -1) {
        result += currentChar;
      } else {
        result += alpha.charAt(index);
      }
    }
  }

  return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

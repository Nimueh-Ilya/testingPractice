function capitalize(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
console.log(capitalize("poop"));
function reverseString(n) {
  return n.split("").reverse().join("");
}
console.log(reverseString("PoopyButthole"));
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const cipher = "bcdefghijklmnopqrstuvwxyza";

const isLowerCase = (char) => {
  if (char == char.toLowerCase() && char != char.toUpperCase()) {
    return true;
  }
  return false;
};

const isUpperCase = (char) => {
  if (char == char.toUpperCase() && char != char.toLowerCase()) {
    return true;
  }
  return false;
};

const singleLowerCipher = (char) => {
  const index = alphabet.indexOf(char);
  let cipherCharacter = cipher[index];
  return cipherCharacter;
};

const caeserCipher = (string) => {
  if (typeof string !== "string") {
    return "not a string";
  }

  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (isUpperCase(string[i]) || isLowerCase(string[i])) {
      if (isLowerCase(string[i])) {
        newString += singleLowerCipher(string[i]);
      } else if (isUpperCase(string[i])) {
        newString += singleLowerCipher(string[i].toLowerCase()).toUpperCase();
      }
    } else {
      newString += string[i];
    }
  }
  return newString;
};
const analyzeArray = (array) => {
  if (!isValidArray(array)) {
    return "not an array";
  } else {
    const sum = array.reduce((current, previous) => {
      return current + previous;
    });

    const average = sum / array.length;

    const min = array.reduce((current, previous) => {
      return Math.min(current, previous);
    });

    const max = array.reduce((current, previous) => {
      return Math.max(current, previous);
    });

    const length = array.length;

    const analyzedArray = {
      average: average,
      min: min,
      max: max,
      length: length,
    };

    return analyzedArray;
  }
};

const isValidArray = (array) => {
  if (Array.isArray(array)) {
    for (let item of array) {
      if (typeof item !== "number") {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

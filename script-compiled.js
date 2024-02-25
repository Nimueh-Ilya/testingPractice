export const capitalize = string => {
  for (let i = 0; i < string.length; i++) {
    if (isUpperCase(string[i])) {
      return string;
    } else if (isLowerCase(string[i])) {
      let newString = string.slice(0, i) + string[i].toUpperCase() + string.slice(i + 1, string.length + 1);
      return newString;
    }
  }
  return "no valid characters";
};
export const reverseString = string => {
  if (typeof string === "string") {
    return string.split("").reverse().join("");
  }
  return "not a string";
};
const isValidArguments = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  } else {
    return true;
  }
};
const add = (x, y) => {
  if (isValidArguments(x, y)) {
    return x + y;
  }
  return "Arguments contain a non-number";
};
const subtract = (x, y) => {
  if (isValidArguments(x, y)) {
    return x - y;
  }
  return "Arguments contain a non-number";
};
const divide = (x, y) => {
  if (isValidArguments(x, y)) {
    return x / y;
  }
  return "Arguments contain a non-number";
};
const multiply = (x, y) => {
  if (isValidArguments(x, y)) {
    return x * y;
  }
  return "Arguments contain a non-number";
};
const calculator = {
  add,
  subtract,
  divide,
  multiply
};
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const cipher = "bcdefghijklmnopqrstuvwxyza";
const isLowerCase = char => {
  if (char == char.toLowerCase() && char != char.toUpperCase()) {
    return true;
  }
  return false;
};
const isUpperCase = char => {
  if (char == char.toUpperCase() && char != char.toLowerCase()) {
    return true;
  }
  return false;
};
const singleLowerCipher = char => {
  const index = alphabet.indexOf(char);
  let cipherCharacter = cipher[index];
  return cipherCharacter;
};
export const caeserCipher = string => {
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
export const analyzeArray = array => {
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
      length: length
    };
    return analyzedArray;
  }
};
const isValidArray = array => {
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

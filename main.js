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

import { analyzeArray, caeserCipher, calculator, capitalize } from "./main.js";

test("normal number array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("array with non-number", () => {
  expect(analyzeArray([1, 2, 3, 4, "5"])).toBe("not an array");
});

test("array-like object (string)", () => {
  expect(analyzeArray("12345")).toBe("not an array");
});
test('"aaabbbccc" becomes "bbbcccddd"', () => {
  expect(caeserCipher("aaabbbccc")).toBe("bbbcccddd");
});

test('"aAabBbzZz" becomes "bBbcCcaAa"', () => {
  expect(caeserCipher("aAabBbzZz")).toBe("bBbcCcaAa");
});

test('"a1ab#bc c" becomes "b1bc#cd d"', () => {
  expect(caeserCipher("a1ab#bc c")).toBe("b1bc#cd d");
});

test('1 becomes "not a string"', () => {
  expect(caeserCipher(1)).toBe("not a string");
});
test("add(4, 2) is 8", () => {
  expect(calculator.add(4, 2)).toBe(6);
});

test("add(-4, 2) is -2", () => {
  expect(calculator.add(-4, 2)).toBe(-2);
});

test("add(0.5, 0.2) is 0.7", () => {
  expect(calculator.add(0.5, 0.2)).toBe(0.7);
});

test('add("4", 2) is "Arguments contain a non-number"', () => {
  expect(calculator.add("4", 2)).toBe("Arguments contain a non-number");
});

test("subtract(4, 2) is 2", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("subtract(-4, 2) is -6", () => {
  expect(calculator.subtract(-4, 2)).toBe(-6);
});

test("subtract(0.5, 0.2) is 0.3", () => {
  expect(calculator.subtract(0.5, 0.2)).toBe(0.3);
});

test('subtract("4", 2) is "Arguments contain a non-number"', () => {
  expect(calculator.subtract("4", 2)).toBe("Arguments contain a non-number");
});

test("divide(4, 2) is 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("divide(-4, 2) is -2", () => {
  expect(calculator.divide(-4, 2)).toBe(-2);
});

test("divide(0.5, 0.2) is 2.5", () => {
  expect(calculator.divide(0.5, 0.2)).toBe(2.5);
});

test('divide("4", 2) is "Arguments contain a non-number"', () => {
  expect(calculator.divide("4", 2)).toBe("Arguments contain a non-number");
});

test("multiply(4, 2) is 8", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test("multiply(-4, 2) is -8", () => {
  expect(calculator.multiply(-4, 2)).toBe(-8);
});

test("multiply(0.5, 0.2) is 0.1", () => {
  expect(calculator.multiply(0.5, 0.2)).toBe(0.1);
});

test('multiply("4", 2) is "Arguments contain a non-number"', () => {
  expect(calculator.multiply("4", 2)).toBe("Arguments contain a non-number");
});
test('"test" should become "Test"', () => {
  expect(capitalize("test")).toBe("Test");
});

test('"Test" should become "Test"', () => {
  expect(capitalize("Test")).toBe("Test");
});

test('"TEST" should become "TEST"', () => {
  expect(capitalize("TEST")).toBe("TEST");
});

test('"three word test" should become "Three word test"', () => {
  expect(capitalize("three word test")).toBe("Three word test");
});

test('"12@#abcd@#34" should become "12@#Abcd@#34"', () => {
  expect(capitalize("12@#abcd@#34")).toBe("12@#Abcd@#34");
});

test('"12@#Abcd@#34" should become "12@#Abcd@#34"', () => {
  expect(capitalize("12@#Abcd@#34")).toBe("12@#Abcd@#34");
});

test('"1234" should become "no valid characters"', () => {
  expect(capitalize("1234")).toBe("no valid characters");
});

test('"@#$" should become "no valid characters"', () => {
  expect(capitalize("@#$")).toBe("no valid characters");
});

test('1234 should become "no valid characters"', () => {
  expect(capitalize(1234)).toBe("no valid characters");
});

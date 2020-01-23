const capitalizeWord = require('./capitalize.js');
const reverseWord = require('./reverseString.js');
const calculate = require('./calculator.js');
const caesarCipher = require('./caesarCipher.js');
test('Capitalize an input String', () => {
  expect(capitalizeWord('mephistoDevelop')).toBe('MephistoDevelop');
});

test('Reverse a sting', () => {
  expect(reverseWord('Hello World')).toBe('dlroW olleH');
});

test('Sum of two numbers', () => {
  expect(calculate['add'](1, 2)).toBe(3);
});

test('Substract from two numbers', () => {
  expect(calculate['substract'](10, 5)).toBe(5);
});

test('Multiply of two numbers', () => {
  expect(calculate['multiply'](5, 2)).toBe(10);
});

test('Division from two numbers', () => {
  expect(calculate['division'](10, 5)).toBe(2)
});

test('Caesar Cipher with 1 key value', () => {
  expect(caesarCipher('Hello', 1)).toBe('Ifmmp');
});

test('Caesar Cipher with 3 key value', () => {
  expect(caesarCipher('Whats up', 3)).toBe('Zkdwv xs');
});
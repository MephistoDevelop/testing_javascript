const capitalizeWord = require('./capitalize.js');
const reverseWord = require('./reverseString.js');
const calculate = require('./calculator.js');
const caesarCipher = require('./caesarCipher.js');
const arrayAnalysis = require('./arrayAnalisis.js')

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

test('Caesar Cipher with 5 key value', () => {
  expect(caesarCipher('Oh yes', 5)).toBe('Tm djx');
});

test('Caesar Cipher with 1 key value with signs', () => {
  expect(caesarCipher('!Oh yes.', 5)).toBe('!Tm djx.');
});

test('simple array test 1', () => {
  expect(arrayAnalysis([10, 20, 30, 40, 50])).toEqual({ average: 30, min: 10, max: 50, length: 5 });
});

test('simple array test 2', () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});


test('simple array test 3', () => {
  expect(arrayAnalysis([5, 25, 50, 0, 0, 100, 5, 5, 5, 5])).toEqual({
    average: 20,
    min: 0,
    max: 100,
    length: 10
  });
});
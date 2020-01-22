const capitalizeWord = require('./capitalize.js');
const reverseWord = require('./reverseString.js');

test('Capitalize an input String', () => {
  expect(capitalizeWord('mephistoDevelop')).toBe('MephistoDevelop');
});

test('Reverse a sting', () => {
  expect(reverseWord('Hello World')).toBe('dlroW olleH');
});
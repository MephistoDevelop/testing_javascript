const capitalizeWord = require('./capitalize.js');

test('Capitalize an input String', () => {
  expect(capitalizeWord('mephistoDevelop')).toBe('MephistoDevelop');
});
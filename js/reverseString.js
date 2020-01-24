function reverseString(str) {
  const splitArray = str.split('');
  const reverseArray = splitArray.reverse();
  const finalArray = reverseArray.join('');

  return finalArray;
}

module.exports = reverseString;
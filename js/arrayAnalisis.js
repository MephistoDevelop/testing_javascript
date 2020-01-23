function arrayAnalisis(array) {
  const object = {};
  const average = (array.reduce((a, b) => a + b)) / array.length;
  object['average'] = average;
  object['min'] = Math.min(...array);
  object['max'] = Math.max(...array);
  object['length'] = array.length;

  console.log(object['max']);
  return object;
}

module.exports = arrayAnalisis;
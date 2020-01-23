function decrypt(charArray, key) {
  const array = [];
  charArray.forEach((character) => {
    if (character === 32) array.push(32);
    if (character >= 33 && character <= 47) array.push(character);
    if (character >= 65 && character <= 90) {
      let enc = character + key;
      if (enc > 90) enc -= 26;
      array.push(enc);
      return enc;
    }
    if (character >= 97 && character <= 122) {
      let enc = character + key;
      if (enc > 122) enc -= 26;
      array.push(enc);
      return enc;
    }
    return character;
  });
  const f = array.map((e) => String.fromCharCode(e));
  return f.join('');
}

function caesarCypher(text = 'Hello world', key = 0) {
  const charArray = text.split('').map((c) => c.charCodeAt());
  return decrypt(charArray, key);
}

module.exports = caesarCypher;
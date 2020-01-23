
function decrypt(charArray, key) {
  const array = [];
  charArray.forEach((c) => {
    if (c === 32) array.push(32)
    if (c >= 33 && c <= 47) array.push(c)
    if (c >= 65 && c <= 90) {
      let enc = c + key;
      if (enc > 90) enc -= 26;
      array.push(enc);
      return enc;
    }
    if (c >= 97 && c <= 122) {
      let enc = c + key;
      if (enc > 122) enc -= 26;
      array.push(enc);
      return enc;
    }
  });
  const f = array.map((e) => {
    return String.fromCharCode(e);
  });
  return f.join('');
}

function caesarCypher(text = 'Hello world', key = 0) {
  const charArray = text.split('').map(c => c.charCodeAt());
  return decrypt(charArray, key);
}


module.exports = caesarCypher;
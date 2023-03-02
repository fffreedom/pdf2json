function readToken(data, offset) {
  var token = "",
    ch = data[offset];
  while (ch !== 13 && ch !== 10) {
    if (++offset >= data.length) break;
    token += String.fromCharCode(ch);
    ch = data[offset];
  }
  return token;
}

token = readToken(4789, 0);
console.log(token);

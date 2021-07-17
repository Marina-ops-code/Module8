const string = "Hello";

function reverseHelper(str) {
  return str.split(/([\s,.])/).
  map((item) => {
    return item.split``.reverse().join``;
  }).join``;
}

console.log(reverseHelper(string));
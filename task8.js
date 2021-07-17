let myMap = new Map();
myMap.set ("sky", "blue");
myMap.set ("grass", "green");
myMap.set ("sun", "yellow");

for (let key of myMap.keys()){
  console.log(`${key} is ${myMap.get(key)}`);
}
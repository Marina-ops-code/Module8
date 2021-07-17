let someArr = ["Orange", "Apple", "Table", "House"]; 
function equals (item) {return item = someArr[0];} 
console.log(someArr.every(equals));
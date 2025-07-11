// Spread Operator

// String
const word = "Hello";
const letters = [...word];
console.log(letters);

// Array
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2];
console.log(combined); 

// Object
const obj1 = { name: "Ali" };
const obj2 = { age: 22 };
const data = { ...obj1, ...obj2 };
console.log(data); 

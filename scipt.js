var obj1 = {name:"person", age:5}
var obj2 = {age : 5, name : "person"}
//console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
let a = JSON.stringify(obj1);
let b = JSON.stringify(obj2);
//console.log(a, b);
console.log(_.isEqual(obj1, obj2));

// let result = obj1.name == obj2.name; 
// let result1 = obj1.age == obj2.age;
// console.log(result);
// console.log(result1);
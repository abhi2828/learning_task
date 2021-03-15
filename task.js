var a = [1, 2, 3]
var b = a
var c = 8;
var d = 8;


console.log(b == a, '=> test') // this will return true

var a1 = [1, 2, 3]
var b1 = [1, 2, 3]

console.log(b1 == a1, '=> test') // this will return false

console.log(JSON.stringify(a1) == JSON.stringify(b1)) // this will return true

// Javascript arrays are objects and you can't simply use the equality operator == to understand if the content of those objects is the same. The equality operator will only test if two object are actually exactly the same instance (e.g. myObjVariable==myObjVariable , works for null and undefined too).
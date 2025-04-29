let variableName = "Chris";
console.log(variableName); // Chris

variableName = 25;
console.log(variableName); // 25

variableName = true;
console.log(variableName); // true

variableName = [654, "hey hey hey", {}];
console.log(variableName); // [654, "hey hey hey", {}]

const someVariableName = "Jimmy";
console.log(someVariableName); // Jimmy
// someVariableName = 25; // TypeError: Assignment to constant variable.


let myName = "Jim";
console.log(myName); // Jim
console.log("This is the string index example", myName[2]); // This is the string index example m

// length string method
console.log("length of this string ", myName.length)

// toUpperCase string method
console.log("toUpperCase of this string ", myName.toUpperCase()) // toUpperCase of this string  CHRIS

// toLowerCase string method
console.log("toLowerCase of this string ", myName.toLowerCase()) // toLowerCase of this string  chris

// trim string method
let trimExampleVariable = "        HELLO WORLD!      ";
console.log("trimExampleVariable ", trimExampleVariable) // trimExampleVariable   HELLO WORLD!
console.log("trim string method ", trimExampleVariable.trim()) // trim string method  HELLO WORLD!

// slice string method
let sliceExampleVariable = "HELLO EVERYONE!";
console.log("slice example", sliceExampleVariable.slice(
    0, 5 // start index, end index (not included in the slice) 
)) 
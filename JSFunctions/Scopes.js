// note : node global scope is different and browser or console global scope is different
let a = 300
if(true){
    let a = 10
    const b = 20

    console.log("Inner Block Scope value of a:", a);
}


console.log(a);

// nested scope

function one (){
  const username = "Stricas"

  function two(){
    const website = "YouTube"
    console.log(website);

    console.log(username);
  }
  // console.log(website);
 
  // two()
}

// one()

// using if else

if(true){
  const username = "Stricas"

  if(username === "Stricas"){

    const website = " youtube"
    console.log(username + website);



  }

  // console.log(website);
}

// console.log(username);


/////////////////////////////////////////////////////////////////
console.log(addone(5))
function addone(num1){
  return num1 + 1
}

// console.log(addone(5))

/////////////////////////////////////////////////////////////////

// addTwo(5)    // in this type of fuction we cannot declare or execute function before function scope
const addTwo = function(num1){
  return num1 + 2
}

console.log(addTwo(5))







// function myFunc(theObject) {
//     theObject.make = "Toyota";
//   }
  
//   const mycar = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998,
//   };
  
//   console.log(mycar.make); // "Honda"
//   myFunc(mycar);
//   console.log(mycar.make); // "Toyota"





// Types of Scopes

// Global scope: The default scope for all code running in script mode.
// Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.
// In addition, variables declared with let or const can belong to an additional scope:

// Block scope: The scope created with a pair of curly braces (a block).


const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);


function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.call(this, "convertible", "petrol");
	this.brand = brand;
	console.log(`Car details = `, this);
}
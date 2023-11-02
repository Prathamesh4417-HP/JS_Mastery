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
  
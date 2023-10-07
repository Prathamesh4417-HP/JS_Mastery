// Investing Study

let score = "80abs"

console.log(typeof score); // first method to know the type of data
console.log(typeof (score)); // Second method to know the type of data

let valueInNum = Number(score)
console.log(typeof valueInNum);
console.log(valueInNum);

// "80" => 80
// "80abs" => NaN
// 1 => true || 0 => false

let isLogin = " "

let boolsLogin = Boolean(isLogin)
console.log(boolsLogin);

// 1 => true || 0 => false
// "" => false
// " String value " => true

let someNumber = '' // || // " " 

let stringNumber = Boolean(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));

// ----------------------------- * Operations * --------------------------------

let value = 3

let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " Prathamesh"

let result = str1 + str2
console.log(result);
// or
console.log("\n");

console.log(str1 + str2);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory (Premetive) , Heap (Non-Premetive)


let myName = "Prathamesh Sonawane"  // stored in stack

let anotherName = myName     // get copy of myName variable

anotherName = "Stricas"

console.log("\n",myName);
console.log("\n",anotherName);




let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne   // get direct reference from heap memory

console.log(userOne.email);
console.log(userTwo.email);
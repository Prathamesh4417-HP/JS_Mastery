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
const Name = "Prathamesh" // 1st way to declare the string
const repoCount = 50

console.log(`Hello my name is ${Name} and my repo count on github is ${repoCount}`);  // String interpolation

//another way to declare string is

const gameName = new String('ForzaHorizon')


console.log(gameName)
console.log(gameName[0])

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())


console.log(gameName.charAt(2))
console.log(gameName.indexOf('H'))

console.log(gameName.toLowerCase())
console.log(gameName.toLowerCase())


// Substring

const newString = gameName.substring(0, 5)
console.log(newString);

// Slicing

const anotherString = gameName.slice(-10, 9)
console.log(anotherString);

let email = "        Stricas@google.com         "
console.log(email)
console.log(email.trim())  // neglacte the extra spaces


// Replace 

const url = "https://Stricas.com/prathamesh%21sonawane"
console.log(url.replace('%21','-'));

console.log(url.includes('prathamesh'))






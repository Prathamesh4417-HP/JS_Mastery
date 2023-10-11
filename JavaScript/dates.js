// Dates

let myDate = new Date()
console.log(myDate.toDateString());
// Tue Oct 10 2023

console.log(myDate.toString());
// Tue Oct 10 2023 17:14:21 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toLocaleDateString());
// 10/10/2023

console.log(myDate.toLocaleString());
// 10/10/2023, 5:16:57 PM

// Type of Date
console.log(typeof myDate);
// object

// let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date("04/26/2002")
console.log(myCreatedDate.toDateString());
// Mon Jan 23 2023



myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

// Check time stamp in milli second
let myTimeStamp = Date.now()



console.log(myTimeStamp);
// 1697025355061

console.log(Date.now());
console.log("\n");


let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: "long",
    
   
})
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.toDateString());

// 2023-10-11T12:15:41.717Z
// 9
// 3
// Wed Oct 11 2023



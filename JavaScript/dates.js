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

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());
// Mon Jan 23 2023

console.log(myCreatedDate.toDateString());

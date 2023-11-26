// if statement

// if(condition){

// }

// if(2 == "2"){

//     console.log("executed");
// }

// if(2 === "2"){

//     console.log("executed");
// }

// let temperature = 40;

// if(temperature === 41){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// const score = 200;
// if(score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

//  const balance = 1000

// // if(balance > 500) console.log("test"); // Implicit function scope

// if (balance < 500) {
//     console.log("less than");
    
// }
// else if (balance < 750) {
//     console.log("less thsn 750");
// }else{
//     console.log("less thsn 1200");

// }

const userLoggedinByEmail = true
const debitCard = true
const userLoggedinByGoogle = true

if (userLoggedinByEmail && debitCard) {
    console.log("Allow to buy courses");
}

if(userLoggedinByEmail || userLoggedinByGoogle){
    console.log("user login successfully");
}


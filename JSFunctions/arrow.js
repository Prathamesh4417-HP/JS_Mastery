const user = {
    username:"Stricas",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Prathamesh"
// user.welcomeMessage()
// console.log(this);

    

    // Browser Global Object : Window Object

// function chai(){
//     // let username = 'Stricas'
//     // console.log(this.username);   // we cannot use this keyword in functions but use in objects
// }

// chai()


// Arrow Functions
const addNums =  (num1 , num2) => {

    return num1 + num2
}

console.log(addNums(3,4));


// Implicit fuction 
const addNums1 =  (num1 , num2) =>  num1 + num2
console.log(addNums1(3,7));



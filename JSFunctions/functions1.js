// function addTwoNum(num1, num2){

//    console.log( num1 + num2);

// }

// addTwoNum(3,4)

function addTwoNum(num1, num2){

    // let result = num1 + num2
    // console.log("Prathamesh");
    // console.log(result);
    // return result

    // or

    // return num1+num2
}

const result = addTwoNum(3,4)

// function loginUerMessage(username){
//     if(username === loginUerMessage){
//         console.log("please enter valid username");
//         return

//     }
//     return `${username} just logged in`
// }

// console.log(loginUerMessage("Prathamesh"));

function calculateCartPrice(val1, val2, ...num1){
    return val1, val2, num1

}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username:"Stricas",
    price : 199

}

function handleObj(anyobj){
    console.log(`user name is ${anyobj.username} and price is ${anyobj.price}`)

}

handleObj(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getarray){
    return getarray[1]

}

console.log(returnSecondvalue(myNewArray))
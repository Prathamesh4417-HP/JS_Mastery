//const tinderUser = new Object() // Singleton object

const tinderUser = {}   // Non Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Stricas"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Some@gmail.com",
    fullName: {
        userfullName : {
            firstName: "Prathamesh",
            lastName: "Sonawane"
        }
    }
}

console.log(regularUser.fullName.userfullName.firstName); // by this we can access values

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)

console.log(obj3);

// object assign()

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign({},target, source);

console.log(target);
// both gives same output
console.log(returnedTarget)
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);

const objEx = {...target, ...source}

console.log(objEx);

// when we get values from database, Objects in arrays

const users = [
    {
        email:"p@gmail.com",
        name: "Prathamesh"
    },
    {
        email:"p@gmail.com",
        name: "Prathamesh"
    },
    {
        email:"p@gmail.com",
        name: "Prathamesh"
    }
]

users[1].email

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Stricas', false ]
console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Stricas' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // gives boolean values // true

console.log("\n\n\n\n\n");




// OBJECT DESTRUCTURE AND JSON API
const course = {
    coursename:"javaScript",
    price: "999",
    courseInstructor:"Hitesh"
}

// const{courseInstructor} = course
// OR
const{courseInstructor: instructor} = course
// console.log(courseInstructor);
// OR
console.log(instructor);



// API call from JSON
// {
//     "name": "Prathamesh",
//     "coursename": "JS",
//     "price": "free"

// }
// Singleton

// object literals

// constructor method 
//Object.create

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Prathamesh",
    age: 20,
    "number" : 10,
    mySym: "mykey1",
    location: "Pune",
    email:"prathameshsonawane@google.com",
    isLoggedIn : false,
    LastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser["name", "email"]);
console.log(JsUser.number);
console.log(JsUser.mySym);
console.log(typeof JsUser.mySym);




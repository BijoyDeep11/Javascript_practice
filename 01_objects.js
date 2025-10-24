// singleton

//object literals
//Object.create
mySym = "key1"
const jsUser = {
    name: "Bijoy",
    age: 20,
    location: "Asansol",
    [mySym]:"key1",
    email: "bijoy@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);

jsUser.email = "bijoy@google.com"
Object.freeze(jsUser)
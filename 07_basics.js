// stack (Primitive), heap (Non-Primitive)

let myYoutubename = "bijoydeepdotcom"
let anotherName = myYoutubename
anotherName = "chai aur code"
console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "bijoy@google.com"
console.log(userOne.email);
console.log(userTwo.email);

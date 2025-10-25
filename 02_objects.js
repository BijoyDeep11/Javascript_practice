const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName:{
        userfullname: {
            firstName: "Bijoy Deep",
            lastName: "Ghosh"

    }
  }
}
console.log(regularUser.fullName.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {4: "c", 3: "d"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

const users = [
    {
        id : 1,
        email: "123@gmail.com"
    },
    {
        id : 1,
        email: "123@gmail.com"
    }
]
users[1].email
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


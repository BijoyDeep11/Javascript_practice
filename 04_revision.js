/*
1.Bijoy
2.20
3.{brand: 'Tesla', color: 'Black'}
4.{name: 'Alex'}
5.Asansol
6.undefined
7.['a','b']
8.[10, 20]
9.C)
10.B)
11.C)
12.B)
13.C)
14.B)
*/

//Q15.
const me = {
    name: "Bijoy",
    age: 20
}
console.log(me.age);

//Q16.
const phone = {
    brand: "Apple",
}
phone["color"] = "Silver"
console.log(phone);

const test = {
  student: {
    name: "Rahul",
    marks: 95
  }
}
console.log(test.student.marks);

const me1 = {
  name: "Bijoy",
  city: "Asansol",
  age: 20
}
console.log(Object.keys(me1));

function hasProperty(obj, key){
    return key in obj
}
const person = { name: "Alice", age: 25 };

console.log(hasProperty(person, "name"));

//Q20.
function getUserInfo(user){
    return `${user.name} lives in ${user.city} and knows ${user.skills.join(", ")}`
}
const user = {
  name: "Bijoy",
  city: "Asansol",
  skills: ["JS", "React"]
};

console.log(getUserInfo(user));
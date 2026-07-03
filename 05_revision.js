/*
1.Bijoy
2.20
3.[1,2,3,4]
4.{name: "Bijoy", age: 20}
5.[1,2,3]
  [1,2,3,4]
6.Rahul Delhi
7.[10,15.20]
8.{b:2, c:3}
9.B)
10.A)
11.B)
12.A)
13.B)
14.B)
*/

//Q15.

const user = {
  name:"Bijoy",
  city:"Asansol"
}
const {name, city} = user;
console.log(name);

//Q16.

let [a,b,c] = [10,20,30]
console.log(c);

//Q17.

const arr=[1,2,3]
const arr1 = [...arr]
arr1.push(4)
console.log(arr1);

const arr2 = [1,2]
const arr3 = [...arr2,3,4]
console.log(arr3);

//Q19.

function sum(...numbers){
    const arr4 = [...numbers]
    let sum = 0
    for(let i=0;i<arr4.length;i++){
      sum+=arr4[i];
    }
    return sum
}
console.log(sum(5,10,15))

//Q20.

const students = [
  {name:"Bijoy", marks:95},
  {name:"Rahul", marks:70},
  {name:"Aman", marks:85}
];

const names = students.map(({name}) => name)

console.log(names);

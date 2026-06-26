/*
1.[20,30,40]
2.[1,4]
3.[5,100,10,15]
4.[30,40]
5.["HTML", "CSS", "Javascript"]
6."I-Love-Javascript"
7.[1,2,3]
  [4]
8.[10,20,100,40]
9.B.map()
10.B.split()
11.B.Returns elements from index 2 onwards
12.B.Removes one element from index 2
13.C.String
14.D.slice()
*/

//Q15.
let arr1 = ["HTML","CSS","JavaScript","React"]
const newArr = arr1.slice(1,3)
console.log(newArr)

//Q16.
const arr2 = ["HTML","CSS","JS"]
const newArr1 = arr2.splice(1,1,"Tailwind")
console.log(arr2);

//Q17.
const arr3 = "apple mango banana"
const newArr2 = arr3.split(" ")
console.log(newArr2);

//Q18.
const arr4 = ["React","Node","MongoDB"]
const newArr3 = arr4.join(" -> ")
console.log(newArr3);

//Q19.
const arr5 = [10,20,30]
let newArr4 = []
for(let i = arr5.length-1;i>=0;i--){
    newArr4 = newArr4.concat(arr5[i])
}
console.log(newArr4);

//Q20.

function removeNegative(arr6){
    const newArr5 = arr6.filter((num) => num > 0)
    console.log(newArr5)
}
removeNegative([-2,4,-1,8,-6,10])
//Q11.
let a = [5,10,15]
a.push(20)
console.log(a)
//Q12.
let a1=[100,200,300]
a1.shift()
console.log(a1)
//Q3.
let a2 = [2,4,6]
let double = a2.map((num)=>{
    return num * 2;
})
console.log(double);
 let a3 = [20,55,90,30,80]
 let greater = a3.filter((num) => {
    return num > 50
 })
 console.log(greater);

 //Q15.
const arr = [10,20,30,40];
for(let i = arr.length-1;i>=0;i--){
    console.log(arr[i]);
}

//Bonus.
function findEvenNumbers(arr){
    return arr.filter((num)=>num%2==0)
}
console.log(findEvenNumbers([3,6,9,10,15,18]))
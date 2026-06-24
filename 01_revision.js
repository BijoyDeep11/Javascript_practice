//Write a function called square() that returns the square of a number.

function square(n){
    let squareNum = n * n
    console.log(squareNum)
}
square(5)

//Write a function called isEven().

function isEven(n){
    if(n % 2 === 0){
        console.log(true)
    }else{
        console.log(false)
    }
}
isEven(9)

//Create a variable called college.

let college = "AEC";
let myCollege = `My College is ${college}`
console.log(myCollege)

//Write a function add(a,b).

function add(a,b){
    let sum = a + b;
    console.log(sum)
}
add(10,6)
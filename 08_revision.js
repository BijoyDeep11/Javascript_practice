/*
1.Async is a keyword that explicitly mentions the function to be asynchronous and returns a promise objects.This async only allows us to use the await keyword. Await keyword is used to make the js code for the current async function wait until the promise is settled.
2.Async always returns a promise object.
3.We cannot use await inside a normal function because it depends on the function to be async to execute.
4.Fetch return a promise known as response object.
5.Because fetching from the server is a asynchronous task i.e it may take more time depending on several factors, await keyword helps to make the function wait until the promise is settled.
6.Inside the async function.
7.Hello
8.20
9.Oops
10.100
11.A
   C
   B
*/

//Q12.

async function showMessage() {
    return "Learning Async/Await"
}

showMessage().then(console.log)

//Q13.
async function mul(){
    return 50;
}
mul().then(num => console.log(num * 2))

//Q14.
async function test(){
    throw new Error("Network Error")
}

test().catch(err => console.log(err.message))

//Q15.
async function fetchUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const json = await response.json()
    return json.name
}

fetchUser().then(console.log)

//Q16.
async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const json = await response.json()
    json.slice(0,3).forEach(post => console.log(post.title))
}
getPosts()

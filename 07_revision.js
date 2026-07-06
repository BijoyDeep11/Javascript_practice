/*
1.three states of a Promise are: Pending, Fulfilled, Rejected.
2. Promise helps users of javascript to apply asynchronous functions with the additional methods to resolve and reject them. It allows other synchronous functions to run without stopping for the finish of the previous functions.
3. .then() is used for listening to resolve functions of the promise and also for reject functions as well (.then(null, f)). But .catch() is explicitly used for reject method, it is the shorthand for .then(null, f).
4. .finally() is a cleanup method and is executed at the end of all the important methods like .then() or .catch().
5. Promise can be changed back from fulfilled to pending if promise chaining is done and after completion of the first .then(), it is moved to another promise.
6.Hello
7.Error
8.20
9.20
10.Done
*/

//Q11.

Promise.resolve("Learning Promises")
                .then(console.log);

//Q12.

Promise.reject("Something went wrong")
                .catch(console.log)


//Q13.
Promise.resolve(20)
        .then(num => num * 5)
        .then(console.log)

//Q14.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Finished"), 2000)
}).then(console.log)
       
//Q15.

Promise.resolve(2)
            .then((num) => num * 5)
            .then((num) => num - 3)
            .then(console.log)


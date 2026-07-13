/*
1.Call stack is a stack maintained to decide which function call will be executed next and after execution the function call is removed from the stack.
2.Event loop is the continuos process of the javascript engine where it handles the event when it triggers and till it triggers it sleeps.
3.Microtask Queue- They are the queue where microtasks like Promise.then are kept.
  Macrotask Queue- They are the queue where synchronous tasks and tasks like setTimeout are kept.
  When a Macrotask is executed all the microtasks are executed first then the engine proceeds to next macrotask.
4.Promise.then, await, queueMicrotask
5.setTimeout, setInterval, synchronous tasks.
6.Because javascript engine prioritises microtasks over macrotasks.
7.Yes, it is single-threaded because it has only one call stack that is why macrotasks and microtasks need to have seperate priorities.
8.A
  B
  C
9.A
  C
  B
10.A
   C
   B
11.A
   End
   Promise
   Timeout
12.1
   5
   3
   4
   2
13.Start
   End
   Promise 1
   Timer 1
   Promise inside Timer.
*/

//Q14.

Promise.resolve()
.then(console.log("Hello"))
.then(console.log("World"))

//Q15.

setTimeout(() => {
    console.log("Start")
    console.log("End");
    console.log("Later");
}, 0);

//Q16.

Promise.resolve()
.then(console.log("Start"))
.then(console.log("End"))
.then(console.log("Promise"))

//Q17.

console.log("A");
Promise.resolve()
.then(console.log("B")
)
setTimeout(() => {
    console.log("C")
}, 0);

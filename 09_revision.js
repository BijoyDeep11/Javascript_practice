/*
1.A lexical scope can be described as the area or block which is a part of closure i.e. the variables mentioned within this block will be accessed and used by the function declared inside the same function.
2.A closure is a combination of a function and a lexical environment, which allows the variable which is above its block to get accessed and used.
3.The variable doesn't disappear because its declared inside the lexical environment and closure help to remember that.
4.Scope chain is a nested chain of function where the variable declared in the parent function can be accessed by the child function. 
5.Can be used in modules, can be used in functions that require the argument from its parent function.
6.False.Because it can be implemented in modules too.
7. 100
   50
8. 2
   3
9. Hello Bijoy
10. Kolkata
11.10
*/

//Q12.

function createAdder(x){
    return function displayResult(y){
        return x + y;
    }
}
const add5 = createAdder(5);

console.log(add5(10));
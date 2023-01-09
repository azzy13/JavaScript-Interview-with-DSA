// <<<<<<<<<<<<<<<-------------------------Hoisting-------------------------------->>>>>>>

/*
Variable Hoisting && Function Hoisting

Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.
In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting- hoisted in diffrent ways temporal dead zone.

 */

//using test before declaration :-> Since the variable test is only declared and has no value, undefined value is assigned to it.

console.log(test); //undefined
var test;

console.log(a); //undefined
var a = 5;

/* 
program to display value
 */

function greet() {
     b = 'hello';
     console.log(b); // hello
     var b;
}

greet(); // hello
console.log(b); //Uncaught ReferenceError: b is not defined

//Variable b is hoisted to the top of the function greet and becomes a local variable. Hence b is only accessible inside the function.

/* If a variable is used with the let keyword, that variable is not hoisted. */
a = 5;
console.log(a); //Uncaught ReferenceError: Cannot access 'a' before initialization
let a;

//A function can be called before declaring it.
greet();

function greet() {
     console.log('Hi , there');
}

//In the above program, the function greet is called before declaring it and the program shows the output. This is due to hoisting.

// <<<<<<<<<<<<<<<-------------------------JavaScript Date and Time -------------------------------->>>>>>>

/*
In JavaScript, date and time are represented by the Date object. The Date object provides the date and time information and also provides various methods. 

There are four ways to create a date object.

1. new Date()
2. new Date(milliseconds)
3. new Date(Date string)
4. new Date(year, month, day, hours, minutes, seconds, milliseconds)


 */
//You can create a date object using the new Date() constructor.

const timeNow = new Date();
console.log(timeNow); // shows current date and time :-  2022-11-25T12:36:28.623Z

// <<<<<<<<<<<<<<<-------------------------Debugging JavaScript in Browser -------------------------------->>>>>>>

/* 
1. Using console.log() 
2. Using debugger
The debugger keyword stops the execution of the code and calls the debugging function.
The debugger is available in almost all JavaScript engines. like V8 engine

3. Setting Breakpoints - JavaScript will stop executing at each breakpoint and lets you examine the values. Then, you can resume the execution of code.


*/

let a = 6;
let b = 9;
let c = a * b;

// stops the execution
debugger;

console.log(c);

// <<<<<<<<<<<<<<<-------------------------JavaScript Regex -------------------------------->>>>>>>

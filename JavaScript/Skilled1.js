// <<<<<<<<<<<<<<<-------------------------Reverse String -------------------------------->>>>>>>
const str1 = 'I can catch you up JAVASCRIPT';

function revStr() {
     // Take empty array
     const revArr = [];
     const length = str.length - 1;

     //loop from the end
     for (let i = length; i >= 0; i--) {
          revArr.push(str1[i]);
     }

     return revArr.join('');
}
console.log(revStr(str1));

// <<<<<<<<<<<<<<<-------------------------Reverse String 2 - way -------------------------------->>>>>>>
const str2 = 'I can catch you up JAVASCRIPT';

function revStr() {
     let revStr = '';
     for (let i = str2.length - 1; i >= 0; i--) {
          revStr += str2[i];
     }
     return revStr;
}

console.log(revStr(str2));

// <<<<<<<<<<<<<<<-------------------------Reverse String 3 - way -------------------------------->>>>>>>

const str3 = 'We are best';

function ReverseString() {
     return str3.split('').reverse().join('');
}
console.log(ReverseString(str3));

// <<<<<<<<<<<<<<<-------------------------Reverse string in place -------------------------------->>>>>>>

const strin = 'I can catch you up JAVASCRIPT';
function reverseInPlace() {
     return strin.split(' ').reverse().join(' ').split('').reverse().join('');
}
console.log(reverseInPlace(strin));

// <<<<<<<<<<<<<<<-------------------------Infinite Currying -------------------------------->>>>>>>
//Q. USE ADD Function - console.log(add(5)(4)(3)(2)())

function add(a) {
     return function (b) {
          if (b) return add(a + b);
          return a;
     };
}
console.log(add(5)(4)(3)(2)()); //14

// <<<<<<<<<<<<<<<-------------------------Implement the code -------------------------------->>>>>>>

//const result= calc.add(10).multiply(5).subtract(30).add(10)  -> console.log(result.total)

//here we are returning this because i need to return whole object over here(cal.add.multiply are function)
//only then we are going able to access the more of function of the object (calc)

const calc = {
     total: 0,
     add(a) {
          this.total = this.total + a;
          return this;
     },
     multiply(a) {
          this.total = this.total * a;
          return this;
     },
     subtract(a) {
          this.total = this.total - a;
          return this;
     },
};

const results = calc.add(10).multiply(5).subtract(30).add(10); //30
console.log(results.total);

// <<<<<<<<<<<<<<<-------------------------Remove Duplicate Item From Array-------------------------------->>>>>>>
//Brute Force Algo
const aa = [1, 2, 1, 2, 3, 4, 5];
const bb = [];
const len = aa.length;

for (let i = 0; i < len; i++) {
     if (bb.indexOf(aa[i]) === -1) {
          bb.push(aa[i]);
     }
}
console.log(bb);

// <<<<<<<<<<<<<<<-------------------------Remove Duplicate Item From Array - 2nd easy way-------------------------------->>>>>>>

const aaaaa = [1, 2, 1, 2, 3, 4, 5, 6, 7, 7, 6];
const resultUniqueValues = [...new Set(aaaaa)];
console.log(resultUniqueValues);

// <<<<<<<<<<<<<<<-------------------------Promise 1-way -------------------------------->>>>>>>
const callMe = new Promise((resolve, reject) => {
     if (true) {
          resolve('Resolve');
     } else {
          reject('Reject');
     }
});
callMe
     .then((result) => {
          console.log(result); //Resolve
     })
     .catch((error) => {
          console.log(error);
     });

// <<<<<<<<<<<<<<<-------------------------Promise 2-way -------------------------------->>>>>>>

const f = () => {
     return 'I am f';
};
const g = () => {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve('I am g');
          }, 3000);
     });
};

const h = () => {
     return 'I am h';
};

const callMine = async () => {
     let ff = f();
     console.log(ff);

     let gg = await g();
     console.log(gg);

     let hh = h();
     console.log(hh);
};
callMine();

// I am f
// I am g
// I am h

// <<<<<<<<<<<<<<<-------------------------Factorial of number -------------------------------->>>>>>>
function factorial(n) {
     let fact = 1;
     if (n == 0 || n == 1) {
          return fact;
     } else {
          for (let i = n; i >= 1; i--) {
               fact = fact * i;
          }
          return fact;
     }
}

const resultt = factorial(5);
console.log(resultt);

// <<<<<<<<<<<<<<<-------------------------Check how many times an Element appears in an Array -------------------------------->>>>>>>

const arrCount = ['a', 'b', 'a', 'a'];

let count = 0;

arrCount.forEach((element) => {
     if (element === 'a') {
          count += 1;
     }
});

console.log(count);

// <<<<<<<<<<<<<<<-------------------------Check how many times an Element appears in an Array -------------------------------->>>>>>>
const arri = [1, 5, 2, 4, 3];
const result = arri.sort((a, b) => {
     return a - b;
});
console.log(result); //[ 1, 2, 3, 4, 5 ]

// <<<<<<<<<<<<<<<------------------------------------------------------------[ Sum of Array elements :- Anonymous Function ] -------------------------------------------------->>>>>>>
const value = [1, 2, 3, 4, 5];
const arraySum = function (value) {
     let sum = 0;
     for (let i = 0; i < value.length; i++) {
          sum = sum + value[i];
     }
     return sum;
};

let resultss = arraySum(value);
console.log(resultss);

//<<<<<<<<<<<<<<<-------------------------Javascript Program To Remove Duplicates From A Given String -------------------------------->>>>>>>
const arrii = [1, 3, 4, 4, 5, 6, 3];
const duplicates = [];

for (let i = 1; i < arrii.length; i++) {
     if (
          duplicates.indexOf(arrii[i]) === -1 &&
          arrii.indexOf(arrii[i], i + 1) != -1
     ) {
          duplicates.push(arrii[i]);
     }
}
console.log(duplicates); //[ 3, 4 ]  // Pending - Concept not clear

//<<<<<<<<<<<<<<<----------------------------------------- Javascript Program Swap two numbers --------------------------------------------->>>>>>>
var a = 1;
var b = 2;
var temp; // way-1

temp = a;
a = b;
b = temp;
console.log(a, b); //2,1

let a = 1;
let b = 2;

[a, b] = [b, a]; // Destructuring way -2
console.log(a, b); //2,1
//<<<<<<<<<<<<<<<---------------------------------- Javascript Program Swap two numbers using  Arithmetic Operators------------------------------------->>>>>>>
let a = 1;
let b = 2;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b); // Arithmetic way -3

//<<<<<<<<<<<<<<<---------------------------------- Flatten the  Array without predefined function------------------------------------->>>>>>>

/*

https://www.youtube.com/watch?v=abbdJ4Yfm54  - Flatten array + setTimeout best question 

- recursion
 - we have empty result array(result)
 - here we are mapping whole array(arr) with forEach loop
 - 'ar' first in loop it will encounter first arr [1,2] then it will check is it array [here it find it's an array and depth is 1 by default]
 - 'result.push' [1,2] now depth becomes 0  here it will check 1 is it array - no because depth is 0 and then move to else statement push to result and same for 2 in array
 - [1,2] in loop it is checking 1 is array or not if not push to result then 2 it will check

 
 */
const arr = [
     [1, 2],
     [3, 4],
     [5, 6, [7, 8], 9],
     [10, 11, 12],
];

function customFlat(arr, depth = 1) {
     let result = [];
     arr.forEach((ar) => {
          if (Array.isArray(ar) && depth > 0) {
               result.push(...customFlat(ar, depth - 1));
          } else result.push(ar);
     });
     return result;
}
console.log(customFlat(arr, 2)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(customFlat(arr)); //[1, 2, 3, 4, 5, 6, [7, 8], 9, 10, 11, 12];

//<<<<<<<<<<<<<<<------------------------------------------------  Explian Call Apply and Bind  -------------------------------------------------->>>>>>>
var person = {
     name: 'Dhananjay',
     hello: function (thing) {
          console.log(this.name + ' says hello ' + thing);
     },
};

var alterEgo = {
     name: 'iTech dhananjay',
};

person.hello.call(alterEgo, 'world'); //iTech dhananjay says hello world - call needs an object as params
person.hello.apply(alterEgo, ['world']); //iTech dhananjay says hello world - apply will take args in array

const newHello = person.hello.bind(alterEgo);
newHello('world'); //iTech dhananjay says hello world - bind doesn't take the 2nd param - bind will return a function

//<<<<<<<<<<<<<<<------------------------------------------------  Promise.all  -------------------------------------------------->>>>>>>
function showText(text, time) {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve(text, time);
          }, 1000);
     });
}
// if one promise fails all promise gonna failed
Promise.all([
     showText('Hello', 1000),
     Promise.resolve('Hi'),
     Promise.reject('Bye'),
])
     .then((value) => {
          console.log(value); //[ 'Hello', 'Hi', 'Bye' ] reject ->  resolve or else uncaught error
     })
     .catch((err) => {
          console.log(err);
     });

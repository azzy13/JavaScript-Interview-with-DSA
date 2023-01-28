// <<<<<<<<<<<<<<<----------------------------------------------- 1. [[ Check Prime Number  ]] --------------------------------------------------------->>>>>>>>>>>

function isPrime(n) {
     if (n < 2) {
          return `{n} is not a prime number`;
     }
     for (let i = 2; i < n; i++) {
          if (n % i === 0) {
               return `${n} is not a prime number`;
          }
     }
     return `${n} is prime number`;
}
const value1 = isPrime(6);
console.log(value1);

// <<<<<<<<<<<<-------------------------------------------- 2. [[  Fibonacci series  up to n terms ]] ------------------------------------------------->>>>>>>>>>>

function fibonaciNumber(n) {
     let n1 = 0,
          n2 = 1,
          nextTerm;

     console.log('Fibonacci Series:');

     for (let i = 0; i <= n; i++) {
          console.log(n1);
          nextTerm = n1 + n2;
          n1 = n2;
          n2 = nextTerm;
     }
}

let values = fibonaciNumber(12);
console.log(values); //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 - Time Complexity - O(n)

// Recursive Approach
function fibonacci(n) {
     if (n <= 1) return n;
     else return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(12));

// <<<<<<<<<<<<-------------------------------------------- 3. [[  Factorial of number Approach One ]] ------------------------------------------------->>>>>>>>>>>
function factorial(n) {
     let fact = 1;
     if (n == 0 || n == 1) {
          return fact;
     } else {
          for (var i = n; i >= 1; i--) {
               fact = fact * i;
          }
          return fact;
     }
}
let n = 4;
facts = factorial(n);
console.log('The factorial of ' + n + ' is ' + facts);

// <<<<<<<<<<<<<<<---------------------------------------------------- 4. [[  Palindrome ]] ------------------------------------------------------------->>>>>>>>>>>

const str = 'madam';
function checkPalindrome(str) {
     let newStr = str.toLowerCase();
     let left = 0;
     let right = newStr.length - 1;
     while (left < right) {
          if (newStr[left] !== newStr[right])
               return `${newStr} is not a palindrome`;

          left++;
          right--;
     }
     return `${newStr} is a palindrome`;
}
console.log(checkPalindrome(str));

// <<<<<<<<<<<<<<<---------------------------------------------------- 5. [[  Sum Zero Problem  ]] ----------------------------------------------------------->>>>>>>>>>>
/* 
   Traverse : To visit each and every element of array
   [-4, 4] - o/p
   O(n^2)  Quadratic time complexity

*/
let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function checkSumPairZero(arr) {
     for (number of arr) {
          for (let j = 1; j < arr.length; j++) {
               if (number + arr[j] === 0) return [number, arr[j]];
          }
     }
}
console.log(checkSumPairZero(arr)); // [ -4, 4 ]

// <<<<<<<<<<<<<<<------------------------------------------------------- 5. [[  Sum Anagram ]] --------------------------------------------------------------->>>>>>>>>>>
let string = 'hello world';
function getCountCharacters(string) {
     const histogram = {};
     for (let i = 0; i < string.length; i++) {
          let char = string[i];
          if (!histogram[char]) {
               histogram[char] = 0;
          }
          histogram[char]++;
     }
     return histogram;
}
console.log(getCountCharacters(string)); //{ h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

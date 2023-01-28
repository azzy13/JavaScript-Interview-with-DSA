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

// <<<<<<<<<<<<<<<---------------------------------------------------- 5. [[  Unique Array  ]] ----------------------------------------------------------->>>>>>>>>>>

let arr = [1, 2, 3, 3, 4, 4, 5, 6, 6, 7, 8];
let uniqArr = [];

for (let i = 0; i < arr.length; i++) {
     if (arr[i] === arr[i + 1]) {
          uniqArr.push(arr[i]);
     }
}
console.log(uniqArr); //[ 3, 4, 6 ]

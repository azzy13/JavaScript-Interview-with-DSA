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
     let value = 1;
     if (n == 0 || n == 1) {
          return value;
     } else {
          for (let i = n; i >= 1; i--) {
               value = value * i;
          }
          return value;
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
const arr = [1, 3, 4, 4, 5, 6, 3];
const duplicates = [];

for (let i = 1; i < arr.length; i++) {
     if (
          duplicates.indexOf(arr[i]) === -1 &&
          arr.indexOf(arr[i], i + 1) != -1
     ) {
          duplicates.push(arr[i]);
     }
}
console.log(duplicates); //[ 3, 4 ]

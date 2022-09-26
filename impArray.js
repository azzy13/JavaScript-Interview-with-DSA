// <<<<<<<<<<<<<<<------------------------- Create an Array-------------------------------->>>>>>>
const aa = ['a', 'b', 'c'];
console.log(aa); //[ 'a', 'b', 'c' ]

const aaa = new Array('a', 'b', 'c'); //create an array with constructor
console.log(aaa); //[ 'a', 'b', 'c']

// <<<<<<<<<<<<<<<-------------------------Create String from Array -------------------------------->>>>>>>
const aaaa = ['a', 'b', 'c'];
const resultString = aaaa.join(' ');
console.log(resultString); //a b c

// <<<<<<<<<<<<<<<-------------------------Access array item by its index -------------------------------->>>>>>>
const ab = ['a', 'b', 'c', 'd'];
console.log(ab[0]); //a
console.log(ab[ab.length - 1]); //d -last item

// <<<<<<<<<<<<<<<-------------------------Find the index of an item in an array -------------------------------->>>>>>>
const aabb = ['a', 'b', 'c'];
console.log(aabb.indexOf('b')); //1

// <<<<<<<<<<<<<<<-------------------------Check if an array contains certain items -------------------------------->>>>>>>
const abb = ['a', 'b', 'c', 'a'];

console.log(abb.includes('e')); //false
console.log(abb.indexOf('a') !== -1); //true

// <<<<<<<<<<<<<<<-------------------------Append or add an item into array -------------------------------->>>>>>>
const aab = ['a', 'b', 'c'];
const result = aab.push('d');
console.log(aab); //[ 'a', 'b', 'c', 'd' ]

// <<<<<<<<<<<<<<<-------------------------Add a new first item into array -------------------------------->>>>>>>
const aaabc = ['a', 'b', 'c'];
aaabc.unshift('0');
console.log(aaabc); //[ '0', 'a', 'b', 'c' ]

// <<<<<<<<<<<<<<<------------------------- Remove the last item from an array -------------------------------->>>>>>>

const abc = ['a', 'b', 'c'];
const results = abc.pop();
console.log(abc); //[ 'a', 'b' ]

// <<<<<<<<<<<<<<<-------------------------Remove the first item from an array-------------------------------->>>>>>>
const abbc = ['a', 'b', 'c'];
abbc.shift();
console.log(abbc); //[ 'b', 'c' ]

// <<<<<<<<<<<<<<<-------------------------Remove multiple items from the end of an array -------------------------------->>>>>>>
//before you need to understand slice method
const aabc = ['a', 'c', 'd', 'd', 'e'];
aabc.splice(1, 0, 'b');

console.log(aabc); //[ 'a', 'b', 'c', 'd', 'd', 'e' ]

const fruits = ['apple', 'banana', 'ban', 'orange', 'tick'];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits); //[ 'apple', 'banana' ]
console.log(removedItems); //[ 'ban', 'orange', 'tick' ]

// <<<<<<<<<<<<<<<-------------------------Empty an array-------------------------------->>>>>>>
// const abcc = ['a', 'b', 'c'];
// abcc.length = 0;
// console.log(abcc); //[] - it will return empty array

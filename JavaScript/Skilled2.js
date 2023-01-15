// <<<<<<<<<<<<<<<-------------------------Map vs Foreach -------------------------------->>>>>>>

const arr = [1, 2, 3, 4, 5];

const mapResult = arr.map((ar) => {
     return ar + 2; //[ 3, 4, 5, 6, 7 ]
});

// Map will return a new array also it will not modify the original array
// We can chain method like filter or anything after it

const forEachResult = arr.forEach((ar, i) => {
     // return ar + 2; //undefined
     arr[i] = ar + 2; //[ 3, 4, 5, 6, 7 ] - modified array a
});
//[ 3, 4, 5, 6, 7 ] - modified array and cannot chain method in array because it return undefined

console.log(mapResult, forEachResult, arr);

// <<<<<<<<<<<<<<<-------------------------Flatten the Array -------------------------------->>>>>>>

let array = [
     [1, 2],
     [3, 4],
     [5, 6, 7, 8, 9],
     [10, 11, 12],
];

let flattened = [].concat(...array);
console.log(flattened); //[1, 2, 3, 4, 5, 6, 7,8,9,10,11,12]

let aa = [
     [1, 2],
     [3, 4],
     [5, 6, [7, 8], 9],
     [10, 11, 12],
];
//use method flat
console.log(aa.flat(2)); //[1, 2, 3, 4, 5, 6, 7,8,9,10,11,12]

// <<<<<<<<<<<<<<<-------------------------null vs undefined -------------------------------->>>>>>>
/* 
 null - it's a actual value
 undefined - variable is declared but not initialized

*/
console.log(typeof null); //object
console.log(typeof undefined); // undefined
console.log(null == undefined); // true
console.log(null === undefined); // false : here it will check the types as well for null it's object and undefined is undefined

// <<<<<<<<<<<<<<<-------------------------var /const/let -------------------------------->>>>>>>s
{
     let a = 10;
}
console.log(a); //ReferenceError: a is not defined

{
     var a = 10;
}
console.log(a); //10

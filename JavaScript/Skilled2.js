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

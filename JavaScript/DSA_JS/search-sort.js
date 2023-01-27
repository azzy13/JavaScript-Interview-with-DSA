// <<<<<<<<<<<<<<<---------------------------------------------- 1. [[   Binary Search  ]] ---------------------------------------------------------->>>>>>>>>>>
function binarySearch(nums, target) {
     let left = 0;
     let right = nums.length - 1;
     while (left <= right) {
          // Find the middle index
          const mid = Math.floor((left + right) / 2);
          if (nums[mid] === target) return mid;
          if (target < nums[mid]) {
               // continue searching to the left
               right = mid - 1;
          } else {
               left = mid + 1;
          }
     }
     return -1;
}

const result = binarySearch([1, 2, 3, 4, 5, 6], 4);
console.log('The elements found at index:' + result);
//Best Case Time Complexity : O(1)
//The Worst Case Time Complexity : O(logN)
//Space Complexity : O(1) for iterative, O(logN) for recursive.

// <<<<<<<<<<<<<<<----------------------------------------------- 2. [[  Linear Search  ]] ---------------------------------------------------------->>>>>>>>>>>

const number = [2, 4, 67, 8, 44, 6, 12];
function linearSearch(number, num) {
     for (let i = 0; i < number.length; i++) {
          if (number[i] === num) {
               return i;
          }
     }
     return -1;
}

console.log(linearSearch(number, 8)); //3
console.log(linearSearch(number, 28)); //-1

// <<<<<<<<<<<<<<<------------------------------------------------ 3. [[   Merge sort  ]] ------------------------------------------------------------->>>>>>>>>>>

function mergeSort(arr) {
     if (arr.length < 2) {
          return arr;
     }
     const mid = Math.floor(arr.length / 2);
     const leftArr = arr.slice(0, mid);
     const rightArr = arr.slice(mid);
     return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
     const sortedArr = [];
     while (leftArr.length && rightArr.length) {
          if (leftArr[0] <= rightArr[0]) {
               sortedArr.push(leftArr.shift()); // remove element from leftarr and push to sortedArr
          } else {
               sortedArr.push(rightArr.shift());
          }
     }
     const resultArr = [...sortedArr, ...leftArr, ...rightArr];
     return resultArr;
}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr)); //[ -6, -2, 4, 8, 20 ] Best Time complexity O(nlogn)

// <<<<<<<<----------------------------- 4. [[   Bubble Sort without in-built method [Most asked sort question] ]] --------------------------------------->>>>>>>>>>>
/* 
20, 5, 1, 4, 80, 78 === i / here it will compare 20,5 (20-i ,5=j) first it will 20,20 
5, 20, 1, 4, 80, 78 === j
5, 1, 20, 4, 80, 78 === j
5, 1, 4, 20, 80, 78 === j  / here 20 is sorted and 20 is not greater than 80 then return false


20, 5, 1, 4, 80, 78 === i / here it will compare 20,5 (5-i ,1=j) 
1, 4, 5, 20, 80, 78 === j
1, 4, 5, 20, 80, 78 === j  / return false after 5 is sorted 

 */
let array = [20, 5, 1, 4, 80, 78];
let swap;

for (let i = 0; i < array.length; i++) {
     for (let j = i; j < array.length; j++) {
          if (array[i] > array[j]) {
               swap = array[i];
               array[i] = array[j];
               array[j] = swap;
          }
     }
}
console.log(array); //[ 1, 4, 5, 20, 78, 80 ]

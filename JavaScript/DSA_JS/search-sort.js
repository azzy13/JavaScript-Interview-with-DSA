// <<<<<<<<<<<<<<<------------------------------------------------- Binary Search -------------------------------------------------------------------->>>>>>>
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

// <<<<<<<<<<<<<<<------------------------------------------------- Linear Search -------------------------------------------------------------------->>>>>>>

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
// <<<<<<<<<<<<<<<------------------------------------------------- Merge sort -------------------------------------------------------------------->>>>>>>
const merge = (left, right) => {
     let result = [];
     let i = 0;
     let j = 0;
     while (i < left.length && j < right.length) {
          if (left[i] <= right[j]) {
               result.push[left[i]];
               i++;
          } else {
               result.push(right[j]);
               j++;
          }
     }
     while (i < left.length) {
          result.push(left[i]);
          i++;
     }
     while (j < right.length) {
          result.push(right[j]);
          j++;
     }

     return result;
};
const sortArray = function (nums) {
     if (nums.length <= 1) return nums;
     let mid = Math.floor(nums.length / 2);
     let left = sortArray(nums.slice(0, mid));
     let right = sortArray(nums.slice(mid));
     return merge(left, right);
};
let a = sortArray([5, 1, 1, 2, 0, 0]); //[ 0, 2, 5 ]
console.log(a);

// <<<<<<<<<<<<<<<----------------------------------- Bubble Sort without in-built method [Most asked sort question] ---------------------------------------------------->>>>>>>

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

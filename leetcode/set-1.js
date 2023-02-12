// <<<<<<<<<<<<<<<-----------------------------------------------  [[ List of All Problems]] ---------------------------------------------------->>>>>>>>>>>
/* 

  1.  Two Sum 
  2.  Add Two Numbers
  13. Roman to Integer
  4. Promises - Creating Promise, Chaining , Error Handling
  5. Event Loop, Callback Queue, Microtask Queue
  6. Undefined vs Not defined
  7. The Scope Chain, 🔥Scope & Lexical Environment
  8. Functions Types & Higer Order Function
  9. Closures
  10. Objects {}
  11. IIFE (Immediately Invoked Function Expression)
  12. Currying
  13. ['this'] keyword
  14. Prototype and Prototypal Inheritance 

*/

// <<<<<<<<<<<<<<<------------------------------------------------- 1. [[   Two Sum  ]] -------------------------------------------------------------->>>>>>>>>>>

/*         [https://www.youtube.com/watch?v=mq6ZQv_apmc&list=PLrClazTqVpJlyey7Szwe_XX9meD4wl2Ma&index=60]
 [[Q]] ->  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
              Input: nums = [2,7,11,15], target = 9
              Output: [0,1]
              Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
              Time Complexity :  O(n)
              Space Complexity : O(n)
              
 */

/*

      2  : 0
      7  : 1
      11 : 2
      15 : 3
      -creating  a hash and the values of each of the nums [2,7,11,15] is gonna be the set to the respective keys

      - Here we  create a hash [ const hash = {} ]
      - set the hash and map it to values (indices)
      - Here we get the values :  let value = nums[i];
      - Here we set the value to the index :  hash[value] = i;
 */

var twoSum = function (nums, target) {
     const hash = {};

     for (let i = 0; i < nums.length; i++) {
          let value = nums[i];
          hash[value] = i;
     }

     for (let i = 0; i < nums.length; i++) {
          let potentialValue = target - nums[i];
          if (hash[potentialValue] && hash[potentialValue] !== i) {
               return [i, hash[potentialValue]];
          }
     }
};

console.log(twoSum([2, 7, 11, 15], 9));

// <<<<<<<<<<<<<<<--------------------------------------------  [[   Two Sum : Way - 2  ]] --------------------------------------------------------->>>>>>>>>>>

var twoSum = function (nums, target) {
     for (let i = 0; i < nums.length; i++) {
          for (j = i + 1; j < nums.length; j++) {
               if (nums[i] + nums[j] === target) {
                    return [i, j];
               }
          }
     }
}; // TC : O(n)^2

// <<<<<<<<<<<<------------------------------------------------- 2. [[   Add Two Numbers  ]] -------------------------------------------------------->>>>>>>>>>>

/*
   function ListNode(val, next) {
     this.val = val === undefined ? 0 : val;
     this.next = next === undefined ? null : next;
}

 */

var addTwoNumbers = function (l1, l2) {};

// <<<<<<<<<<<<------------------------------------------------- 13. [[ Roman to Integer  ]] -------------------------------------------------------->>>>>>>>>>>

/*  - [https://www.youtube.com/watch?v=3QH-rpcoAoI]
    - Roman numerals are represented by seven different symbols: I -1, V-5, X-10, L-50, C-100, D-500 and M-1000.
      Input: s = "III"
      Output: 3
      Explanation: III = 3.
      Input: s = "LVIII"
      Output: 58
  
 */

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {};

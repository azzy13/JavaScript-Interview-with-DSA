// <<<<<<<<<<<<<<<-----------------------------------------------  [[ List of All Problems]] ---------------------------------------------------->>>>>>>>>>>
/* https://www.youtube.com/watch?v=M04IJUf_jEQ&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr - RemoteState


  1.   Two Sum 
  2.   Add Two Numbers
  13.  Roman to Integer
  14.  Longest Common Prefix
  20.  Valid Parentheses
  21.  Merge Two Sorted Lists
  189. Rotate Array
  

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
     let hash = {};

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

// <<<<<<<<<<<<---------------------------------------------------- 13. [[ Roman to Integer ]] ------------------------------------------------------>>>>>>>>>>>

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

var romanToInt = function (s) {
     let result = 0;
     let hash = {
          I: 1,
          V: 5,
          X: 10,
          L: 50,
          C: 100,
          D: 500,
          M: 1000,
     };

     for (let i = 0; i < s.length; i++) {
          let curr = hash[s[i]];
          let next = hash[s[i + 1]];
          //IV
          if (curr < next) {
               result += next - curr;
               i++;
          } else {
               result += curr;
          }
     }
     return result;
};
console.log(romanToInt('IV')); //4

// <<<<<<<<<<<<------------------------------------------------- 13. [[ Longest Common Prefix  ]] ------------------------------------------------------->>>>>>>>>>>

/*  - [https://www.youtube.com/watch?v=0SF6RLMYBcE]
    - Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

       Input: strs = ["flower","flow","flight"]
       Output: "fl"  
   

     - strs[0][0] - here strs[0] as 1 will return 'flower' in loop and strs[0] as 2 will return each element of flower 'f'
            1  2
     - Comparing each charachter of element of array : 'f' in all 3 element then 'l' in all 3 element and so on.
       
  
 */

var longestCommonPrefix = function (strs) {
     if (strs.length === 0) {
          return '';
     }

     for (let i = 0; i < strs[0].length; i++) {
          for (let j = 1; j < strs.length; j++) {
               if (strs[0][i] != strs[j][i]) {
                    return strs[0].slice(0, i);
               }
          }
     }
     return strs[0];
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

// <<<<<<<<<<<<<<<----------------------------------------------- 20. [[ Valid Parentheses ]] ---------------------------------------------------------->>>>>>>>>>>

/* 
  - Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
     Input: s = "()[]{}"
     Output: true

     Input: s = "(]"
     Output: false

     - if  '(', '{', '[' open bracket then we push into stack
     - if it's is closed bracket pop the element from the stack and compare it

*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
     let stack = [];

     for (let i = 0; i < s.length; i++) {
          let top = stack[stack.length - 1];

          if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
               stack.push(s[i]);
          } else if (
               (s[i] == ')' && top == '(') ||
               (s[i] == '}' && top == '{') ||
               (s[i] == ']' && top == '[')
          ) {
               stack.pop();
          } else return false;
     }
     return stack.length === 0;
};

console.log(isValid('()[]{}'));

// <<<<<<<<<<<<<<<--------------------------------------------- 21. [[  Merge Two Sorted Lists ]] ---------------------------------------------------->>>>>>>>>>>
/**  [[https://www.youtube.com/watch?v=W0Mwqk-uPsk&t=237s]]
 *   Definition for singly-linked list.
 *   function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 *   }
 */

/*
    -  dummyHead :   create new linked list 
    -  currentNode : it will itterate through the list
    -  will take node or value of first list l1 and list l2 and compare it , smaller will be pushed into new list
 
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
     let dummyHead = new ListNode(0);
     let currentNode = dummyHead; // it will itterate through this list

     while (l1 != null && l2 != null) {
          if (l1.val < l2.val) {
               currentNode.next = l1;
               l1 = l1.next;
          } else {
               currentNode.next = l2;
               l2 = l2.next;
          }
          currentNode = currentNode.next;
     }
     if (l1 !== null) {
          currentNode.next = l1;
     }
     if (l2 !== null) {
          currentNode.next = l2;
     }
     return dummyHead.next;
};

// <<<<<<<<<<<<<<<----------------------------------------------- 189. [[  Rotate Array    ]] ----------------------------------------------------->>>>>>>>>>>
/*   
    - Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
    - Input: nums = [1,2,3,4,5,6,7], k = 3
        Output: [5,6,7,1,2,3,4]
          Explanation:
            rotate 1 steps to the right: [7,1,2,3,4,5,6]
            rotate 2 steps to the right: [6,7,1,2,3,4,5]
            rotate 3 steps to the right: [5,6,7,1,2,3,4]
    - k = k % nums.length :-  If 'k' is larger than length of nums

let reverseNums = (nums, start, end) => {
     while (start < end) {
          let temp = nums[start];
          nums[start] = nums[end];
          nums[end] = temp;

          start++;
          end--;
     }
};

var rotate = function (nums, k) {
     k = k % nums.length;
     reverseNums(nums, 0, nums.length - 1);
     reverseNums(nums, 0, k - 1);
     reverseNums(nums, k, nums.length - 1);
};
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let reverseNums = (nums, start, end) => {
     while (start < end) {
          [nums[start], nums[end]] = [nums[end], nums[start]];
          start++;
          end--;
     }
};

var rotate = function (nums, k) {
     k = k % nums.length;
     reverseNums(nums, 0, nums.length - 1);
     reverseNums(nums, 0, k - 1);
     reverseNums(nums, k, nums.length - 1);
};

// <<<<<<<<<<<<<<<------------------------------------------------- 1. [[   Two Sum  ]] -------------------------------------------------------------->>>>>>>>>>>

/*
 [[Q]] ->  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
              Input: nums = [2,7,11,15], target = 9
              Output: [0,1]
              Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
              

 */

/*
values being the keys and indices being the values
    [keys] ->  [values]
      2  : 0
      7  : 1
      11 : 2
      15 : 3
 */

const twoSum = function (nums, target) {
     const hash = {};

     for (let i = 0; i < nums.length; i++) {
          let value = nums[i];
          hash[value] = i;
     }

     for (let i = 0; i < nums.length; i++) {
          let potentialKey = target - nums[i];
          if (hash[potentialKey] && hash[potentialKey] !== i) {
               return [i, hash[potentialKey]];
          }
     }
};

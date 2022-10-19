// <<<<<<<<<<<<<<<-------------------------Binary Search------------------------------------------>>>>>>>
function binarySearch(nums,target){
     let left =0;
     let right=nums.length-1;
     while(left<=right){

          const mid=Math.floor((left+right)/2)
          if(nums[mid]===target) return mid
          if(target < nums[mid]){
               right =mid-1
          }
          else{
               left=mid+1f
          }

     }
     return -1
}

const result= binarySearch([1,2,3,4,5,6],4)
console.log('The elements found at index:'+ result)
//Best Case Time Complexity : O(1)
//The Worst Case Time Complexity : O(logN)
//Space Complexity : O(1) for iterative, O(logN) for recursive.

// <<<<<<<<<<<<<<<-------------------------Linear Search------------------------------------------->>>>>>>

const number = [2, 4, 67, 8, 44, 6, 12];
function linearSearch(array, num) {
     for (let i = 0; i < array.length; i++) {
          if (array[i] === num) {
               return i;
          }
     }
     return -1;
}

console.log(linearSearch(number, 8)) //3
console.log(linearSearch(number, 28)) //-1


// <<<<<<<<<<<<<<<-------------------------Merge Sort------------------------------------------->>>>>>>
const merge =  (left, right)=> {
     let result = []
     let i = 0
     let j = 0
     while (i < left.length && j < right.length) {
          if (left[i] <= right[j]) {
               result.push[left[i]];
               i++;
          }
          else{
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
}
const sortArray = function (nums) {
     if (nums.length <= 1) return nums;
     let mid = Math.floor(nums.length / 2);
     let left = sortArray(nums.slice(0,mid));
     let right = sortArray(nums.slice( mid));
     return merge(left, right);


};
let a =sortArray([5, 1, 1, 2, 0, 0])  //[ 0, 2, 5 ]
console.log(a);
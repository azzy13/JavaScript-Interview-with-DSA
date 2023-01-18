const passengers = [
     {
          id: 1,
          passengerName: 'Freddie Mercury',
          isVegetarianOrVegan: false,
          connectedFlights: 2,
     },
     {
          id: 2,
          passengerName: 'Amy Winehouse',
          isVegetarianOrVegan: true,
          connectedFlights: 4,
     },
     {
          id: 3,
          passengerName: 'Kurt Cobain',
          isVegetarianOrVegan: true,
          connectedFlights: 3,
     },
     {
          id: 3,
          passengerName: 'Michael Jackson',
          isVegetarianOrVegan: true,
          connectedFlights: 1,
     },
];

const passengerNames = [];
passengers.forEach((passenger) => {
     passengerNames.push(passenger.passengerName);
});

console.log('passengerNames', passengerNames);

const pasengerList = [];
passengers.forEach((passenger) => {
     if (passenger.isVegetarianOrVegan === true) {
          pasengerList.push(passenger.passengerName);
     }
});
console.log('pasengerList', pasengerList);

/*  
Call back -
The two problems that we  faced in callbacks are:-
1) Callback Hell: Asynchronous operations in JavaScript can be achieved through callbacks. Whenever there are multiple dependent Asynchronous operations it will result in a lot of nested callbacks. This will cause a 'pyramid of doom' like structure.
2) Inversion of control: When we give the control of callbacks being called to some other API, this may create a lot of issues. That API may be buggy,  may not call our callback and create order as in the above example, may call the payment callback twice etc.

*/

/* 
1. What are Promises?
Promises are objects which are used to perform asynchronous operations. They are just like placeholders to store a future value that will be returned after some time. They contain two properties: PromiseState and PromiseResult.

 2. Importance of Promises:
a) Promises can help us to write trust worthy code.
b) Promises are used to solve the problems of callbacks like inversion of control and callback hell.
c) They give us the result prompt in three states: 1) Pending 2) Fulfilled 3) Rejected
d) We can attach function to promise object and retrieve its value unlike callbacks no need to pass the function.
e) Nesting can be done in Promises and with the help of that we can return the values in each individual chain.

*/

/* 
EVENT LOOP

  Things learned:
1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
5. Micro task is given priority over callback tasks.
6. Too many micro tasks generated can cause Starvation (not giving time to callback tasks to execute).
*/

// Use Quokka  - start on current file - stop on current

/* 

Q: Is MongoDB better than MySQL?
A: It all depends on the type of data that you are working on whether it is structured or unstructured and your system requirement and use case.
   If it is structured and needs a traditional relational database then for MySQL and if it is unstructured then go for MongoDB.

Q: Can MongoDB replace MySQL?
    MongoDB is a cross-platform document-oriented and NoSQL database that allows fast changes over time in the database as the application grows but both have their pros and cons
     Mysql is open source, secure, and provides high flexibility 
     whereas MongoDB provides speed, ability to handle unstructured data, etc. Considering all these points we can say yes MongoDB has the potential to replace MySQL.

Q: Which database is fastest?
A: Out of MySQL and MongoDB, MongoDB is fast because of its schema-less feature and ability to handle unstructured data.
 */

// program to check if an object is an array

function checkObject(arr) {
     // check if arr is array
     const result = Array.isArray(arr);

     if (result) {
          console.log(`[${arr}] is an array.`);
     } else {
          console.log(`${arr} is not an array.`);
     }
}

const array = [1, 2, 3];

// call the function
checkObject(array); //[1,2,3] is an array.

//empty an array
const arrays = [1, 2, 3];
arrays.length = 0;
console.log(arrays);

/* for...of with Strings
You can use for...of loop to iterate over string values. For example, */

// string
const string = 'code';

// using for...of loop
for (let i of string) {
     console.log(i);
}
//c
//o
//d
//e

// program to merge and remove duplicate value from an array

const array1 = [1, 2, 3];
const array2 = [2, 3, 5];

function getUniqueAfterMerge(arr1, arr2) {
     // merge two arrays
     let arr = arr1.concat(arr2);
     let uniqueArr = [];

     // loop through array
     //The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc). i - items in the iterable
     for (let i of arr) {
          if (uniqueArr.indexOf(i) === -1) {
               uniqueArr.push(i);
          }
     }
     console.log(uniqueArr);
}

// calling the function
// passing array argument
getUniqueAfterMerge(array1, array2); //[ 1, 2, 3, 5 ]

/* 
 - The two arrays are merged using the concat() method.
 - The for...of loop is used to loop through all the elements of arr.
 - The indexOf() method returns -1 if the element is not in the array.
 Hence, during each iteration, if the element equals -1, the element is added to the uniqueArr array using the push() method.

 
*/

// let arr = [1,2,4,5,6,1,2,3,4,5,6,7,8,9,7,8,2,2,6,5,4,3,2,1,1,1]

// function revAr(arr){
//     let revArr= []
//     for(let i = arr.length-1;i>=0;i--){
//         revArr.push(arr[i])
//     }
//     return revArr;

// }

//pagination
let limit = req.body.limit ? parseInt(req.body.limit) : 10;
let skip = req.body.skip ? parseInt(req.body.limit) : 10;

user.find({})
     .skip(skip)
     .limit(limit)
     .exec((err, data) => {});

//ngnix
// let arr = [1,2,4,5,6,1,2,3,4,5,6,7,8,9,7,8,2,2,6,5,4,3,2,1,1,1]
//

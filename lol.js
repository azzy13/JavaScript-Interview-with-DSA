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

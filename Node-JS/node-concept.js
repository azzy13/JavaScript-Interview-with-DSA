// <<<<<<<<<<<<<<<---------------------------------------------  1. Async/await ---------------------------------------------------------->>>>>>>>>>>

/* 
1. Async/Await is a way of writing promises that allows us to write asynchronous code in a synchronous way. Let's have a look.
2. The event loop allows Node JS to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded 

*/
const getData = async () => {
     try {
          const response = await fetch(
               'https://jsonplaceholder.typicode.com/todos/1'
          );
          const data = await response.json();
          console.log(data);
     } catch (err) {
          console.log(err);
     }
};

getData();

/* 
==> Globals - it is an object - that have multiple methods or functions as setTimeout , setInterval, micro Tasks queue

Q1.. What is Node.js? Where can you use it?

   => Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser. 
      It is used to create server-side web applications.

Q2..  Why use Node.js?
   - It is generally fast
   - It rarely blocks
   - It offers a unified programming language and data type
   - Everything is asynchronous 
   - It yields great concurrency

Q3..  Node.js is widely used in the following applications:

   - Real-time chats
   - Internet of Things  
   - Complex SPAs (Single-Page Applications)
   - Real-time collaboration tools
   - Streaming applications
   - Microservices architecture


Q4.. What Are The Benefits Of Using Node.js?
   - Easy to learn.
   - Keeping things simple.
   - Faster time-to-market, Scalability.
   - Battle-tested old hand, MVP development.
   - Community.

*/

/* 

Q1. What are streams in Node.js?
    => Streams are objects that enable you to read data or write data continuously.

 ** There are four types of streams:
     - Readable – Used for reading operations
     - Writable − Used for write operations
     - Duplex − Can be used for both reading and write operations
     - Transform − A type of duplex stream where the output is computed based on input 

*/
const fs = require('fs');
fs.writeFile(
     'DataFlairDemo.txt',
     'Learn Node.js from DataFlair',
     function (err, file) {
          if (err) throw err;
          console.log('Saved!');
     }
);

/* 
Q3.
What is REPL in Node.js?
 -> REPL stands for Read Eval Print Loop, and it represents a computer environment. 
 -> It’s similar to a Windows console or Unix/Linux shell in which a command is entered. Then, the system responds with an output
   - READ : Reads user's input, parse the input into javascript data-structures & stores in memory
   - Eval : Takes and evaluates the data structure
   - Print: Prints the results
   - Loop : Loops the above command untils user presses ctrl+c twice

*/

/* 
Q3.
What is piping in Node.js?
Piping is a mechanism used to connect the output of one stream to another stream.
 It is normally used to retrieve data from one stream and pass output to another stream

*/

/* 
Q4. What is callback hell?
    Callback hell, also known as the pyramid of doom, 
    is the result of intensively nested, unreadable, and unmanageable callbacks, which in turn makes the code harder to read and debug
    improper implementation of the asynchronous logic causes callback hell


*/

/* 
Q5.For Node.js, why does Google use the V8 engine?
The V8 engine, developed by Google, is open-source and written in C++. 
Google Chrome makes use of this engine. V8, unlike the other engines, is also utilized for the popular Node.js runtime.
V8 was initially intended to improve the speed of JavaScript execution within web browsers.
Instead of employing an interpreter, V8 converts JavaScript code into more efficient machine code to increase performance.
It turns JavaScript code into machine code during execution by utilizing a JIT (Just-In-Time) compiler, as do many current JavaScript engines such as SpiderMonkey or Rhino (Mozilla).


*/
/* 
Q6. What are the different types of HTTP requests?
  - GET, POST, PUT, DELETE

*/

/* 

Q7. What are the advantages of using promises instead of callbacks?
    - The control flow of asynchronous logic is more specified and structured.
    - The coupling is low.
    - We've built-in error handling.
    - Improved readability.
*/

/* 
Q8. How would you define the term I/O? 
    - The term I/O is used to describe any program, operation, or device that transfers data to or from a medium and to or from another medium
    - Every transfer is an output from one medium and an input into another. The medium can be a physical device, network, or files within a system

*/

/* Q9. What is NPM?
   - NPM stands for Node Package Manager, responsible for managing all the packages and modules for Node.js.
   - Node Package Manager provides two main functionalities:
           - Provides command-line utility to install Node.js packages and also manages Node.js versions and dependencies  
           - Provides online repositories for node.js packages/modules, which are searchable on search.nodejs.org
 */

/* 
   Q10. What are the modules in Node.js?
   - Modules are like JavaScript libraries that can be used in a Node.js application to include a set of functions. To include a module in a Node.js application,
     use the require() function with the parentheses containing the module's name.
   
   CORE Modules  - 
   - http : let http = require('http')
   - util
   - fs
   - url [    let url = require('url');
              var adr = 'http://localhost:3000/search?year=2021&month=august';
              var q = url.parse(adr, true);
]
   - stream -Includes methods to handle streaming data
   - zlib - Includes methods to compress or decompress files



Types of Modules in Nodejs:
Core Modules.
local Modules.
Third-party Modules.

 */

/* 
  Q11. Why is Node.js preferred over other backend technologies like Java and PHP?
   - Node.js is very fast
   - Node Package Manager has over 50,000 bundles available at the developer’s disposal
   - Perfect for data-intensive, real-time web applications, as Node.js never waits for an API to return data
   - Easy for web developers to start using Node.js in their projects as it is a JavaScript library

MongoDB is the most common database used with Node.js.
It is a NoSQL, cross-platform, document-oriented database that provides high performance, high availability, and easy scalability.
 */

/* What is the package.json file?
The package.json file is the heart of a Node.js system. 
This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module */

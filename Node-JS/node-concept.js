/* =====> 
It is a NoSQL, cross-platform, document-oriented database that provides high performance, high availability, and easy scalability.
                                                   MongoDB[NoSql] VS MySql Differnce

    $$$$$$$$ MongoDB 
    1.  Data Strucure : Data is stored and represented in JSON(Javascript Object Notation) like documents. 
    2.  Schema : MongoDB stores data in collections with no enforced schema. In other words, incoming data can have a pre-defined structure &
                 it can adhere to it, however, different documents in the same collection can have different structures if required.
    3.  Performance : MongoDB is optimized for write performance ( means writing speed performance of MongoDB database is far greater than MySQL database).   
    4. Scalability :  MongoDB databases can be scaled both vertically and horizontally ( horizontal scaling also known as Scaling out means adding additional nodes or 
                      machines to your infrastructure to match new demands whereas vertical scaling is adding more power to your existing machine for example upgrading CPU and RAM ). 
    5. Replication : In MongoDB, it uses sharding and replication ( sharding allows partitioning of data across multiple servers using the shared key &
                     The technique of synchronizing (organizing) data across many servers to offer redundancy is known as replication). 

    $$$$$$$$ MySql
    1.  Data Strucure : Every record is stored as a table-cell structure with rows and column 
    2.  Schema : MySQL requires a schema definition for the tables in the databases. 
                 Therefore, the schema cannot be altered. Only inputs that conform to the given schema are accepted.
    3.  Performance : MySQL is optimized for high-performance joins across multiple tabless
    4.  Scalability : MySQL Database can be scaled vertically ( Scaling vertically means adding more power to your existing machine for example upgrading CPU and RAM).
    5.  Replication : MySQL supports master-slave replication and master-master replication ( replication feature allows a server -the master to send all changes to another server – the slave).

*/

const mongoose = require('mongoose');
mongoose
     .connect(process.env.DATABASE_CLOUD, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
     })
     .then(() => console.log('DB connected'))
     .catch((err) => console.log(err));

const pool = new Pool({
     user: process.env.PG_USER,
     password: process.env.PG_PASSWORD,
     host: process.env.PG_HOST,
     port: process.env.PG_PORT,
     database: process.env.PG_DATABASE,
});

module.exports = pool;

// <<<<<<<<<<<<<<<---------------------------------------------  1. Event loop + Event Emiiter in node js ---------------------------------------------------------->>>>>>>>>>>

/* 

1. Async/Await is a way of writing promises that allows us to write asynchronous code in a synchronous way. Let's have a look.
2. The event loop allows Node JS to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded 

*/
// example -1
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%************************************************

function resolveAfter2Seconds() {
     return new Promise((resolve) => {
          setTimeout(() => {
               resolve('resolved');
          }, 2000);
     });
}

async function asyncCall() {
     console.log('calling');
     const result = await resolveAfter2Seconds();
     console.log(result);
     // Expected output: "resolved"
}

asyncCall();

/*  Output
> "calling"
> "resolved"

The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
 */

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%****************************************************

//example -2
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
==> Global objects are objects with a scope that is accessible across all of the modules of the Node.js application. 
    There will not be any need to include the objects in every module. One of the objects is declared as global.
     So, this is done to provide any functions, strings, or objects access across the application.

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

Q5.. What is the framework that is used majorly in Node.js today?
   -  [  Hapi.js , Express.js , Sails.js , Meteor.js , Derby.js , Adonis.js ]






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

     /* DEFINING AN ERROR-FIRST CALLBACK  -
        The first argument of the callback is reserved for an error object. If an error occurred, it will be returned by the first err argument.
        The second argument of the callback is reserved for any successful response data. If no error occurred, err will be set to null and 
        any successful data will be returned in the second argument.
     */
     function (err, file) {
          if (err) throw err;
          console.log('Saved!' + file);
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

 */

/* 
  Q14. What is the package.json file?
    The package.json file is the heart of a Node.js system. 
    This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module
     It can also be used as a project identifier and deployed as a means to handle all of the project dependencies.
  */

/* Advanced Topics
 -  What is meant by tracing in Node.js?
      Tracing is a methodology used to collect all of the tracing information that gets generated by V8, the node core, and the userspace code. 
      All of these are dumped into a log file and are very useful to validate and check the integrity of the information being passed.
 - What is a passport in Node.js? - authentication like jwt
 - How to get information about a file in Node.js? 
   The fs.stat function is used to get the required information from a file.
   The syntax is as follows:   fs.stat(path, callback)
- How does the DNS lookup function work in Node.js?
    The DNS lookup method uses a web address for its parameter and returns the IPv4 or IPv6 record, correspondingly.
    There are other parameters such as the options that are used to set the input as an integer or an object. If nothing is provided here, both IPv4 and IPv6 are considered. 
    The third parameter is for the callback function.
    dns.lookup(address, options, callback)
- What are stubs in Node.js? 
     Stubs are simply functions that are used to assess and analyze individual component behavior.
     When running test cases, stubs are useful in providing the details of the functions executed.
- Why is assert used in Node.js?
  Assert is used to explicitly write test cases to verify the working of a piece of code. The following code snippet denotes the usage of assert:
- What is Libuv?
- What is the difference between spawn and fork methods in Node.js?
*/
var assert = require('assert');
function add(x, y) {
     return x + y;
}
var result = add(3, 5);
assert(result === 8, 'three summed with five is eight');

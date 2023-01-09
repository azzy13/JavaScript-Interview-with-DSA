function addWeight(weights) {
     let weightArray = [];

     Object.keys(weights).forEach((key) => {
          for (let i = 0; i < weights[key]; i++) {
               weightArray.push(key);
          }
     });
     return weightArray[Math.floor(Math.random() * weightArray.length)];
}

const weights = {
     green: 1,
     yellow: 2,
     red: 3,
};

console.log(addWeight(weights));

//------------------1----------------->
(function () {
     let a = (b = 10); //here b is not defined using let keyboard, so it will behave like a global .
})();
console.log(b); //10
console.log(a);  //ReferenceError: 'a' is not defined

//------------------2----------------->
//need desired result what will be the value of 'i'
// let i

console.log(i * i); //0
console.log(i + 1); //1
console.log(i - 1); //-1
console.log(i / i); //1

//------------------3----------------->
let x = [1, 2, 3] + [4, 5, 6];
console.log(x); //1,2,34,5,6

//------------------4----------------->
console.log(55555555555555555555); //55555555555555560000
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991 - IT WILL RETURN MAX INTEGER NUMBER THAT JS CONTAIN IF ABOVE IT WILL PRINT ZERO




// const myPromis = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const number = Math.floor(Math.random() * 10);
//     if (number === 5) {
//       resolve(`success${number}`);
//     } else {
//         reject(`erro${number}`);
//     }
//   }, 3000);
// });

// myPromis
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(x,"gh")
// let x= 20
// console.log(x,"gdfmsh")

// var x = 10;
// (() => {
//   console.log("first x", x);
//   x = 20;
//   console.log("sec x", x);
// })();

// console.log("third", x);

// var x = 30;

// var x = 10;

// (()=>{
// foo=100
// console.log(x)
// var foo=10
// console.log(foo)
// })()

// console.log(foo)

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// setTimeout(() => {
//   console.log("Hello");
// },0 );

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
// }

// ------------------- CLOSURE------------------------

// function calBack() {
//   const x = () => {
//     a = 10;
//     console.log(a);
//     const y = () => {
//       //   a = 12;
//       console.log(a);
//       const z = () => {
//         // a = 13;
//         console.log(a);
//       };
//       z();
//     };
//     a = 999;
//     y();
//   };
//   return x;
// }

// const h = calBack();

// h();

// console.log(a);
// // console.log(b);
// var a = b= 5;

// var a = 5
// console.log(a++)
// console.log(a)
// var a = 5
// console.log(++a)
// console.log(a)

// console.log(1 < 2 < 3);
// true;
// console.log(3 > 2 > 1);
// false;

// function foo () {
//   console.log(this.name);
// };

// foo.call({name:"abduR;k"})

//  var x = 20
//  function foo(){
//     console.log(x)
//     var x = 30
//  }

//  foo()

// setTimeout(() => {
//   console.log("Time out");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

// async function foo() {
//   return "Hello";
// }

// const result = foo();

// console.log(result);

// const str = "Hi I am Abdul";

// const newStr = str.split(" ");

// const mapStr = newStr.map((val) => {
//   return val[0].toLocaleUpperCase();
// });

// console.log(mapStr);

// const btn = (document.getElementById("press").onclick = function foo() {
//   new Promise((resolve, reject) => {
//     console.log("Resolving");
//     resolve();
//   }).then(() => {
//     console.log("Thening");
//   });
// });

// async function foo() {
//     return  new Promise(()=>{})
// }

// const res = foo();

// console.log("res", res);

// var str = 1;

// setTimeout(() => {
//   console.log("set time out");
// }, 0);

// let myPromise = new Promise(function (myResolve, myReject) {
//   myResolve("jhfkjdhk"); // when successful
// });

// myPromise.then(function (value) {
//   /* code if successful */
//   console.log(value)
// });

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const arr2 = arr.reverse();
// console.log(arr2);
// setTimeout(() => {
//     console.log("Step 1: Data fetched");
  
//     setTimeout(() => {
//       console.log("Step 2: Data processed");
  
//       setTimeout(() => {
//         console.log("Step 3: Data saved");
  
//         setTimeout(() => {
//           console.log("Step 4: Email sent");
//         }, 1000);
  
//       }, 1000);
  
//     }, 1000);
  
//   }, 1000);
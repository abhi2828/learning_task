// // ******************************************  Question: 1   ****************************************************************

// // Q1.Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' valuesfrom an array.
// // Sample array: [NaN, 0, 15, false, -22, '', undefined, 47, null]

// let ary = [NaN, 0, 15, false, -22, '', undefined, 47, null];

// var new_ary = ary.filter(Boolean);

// console.log(new_ary, '=> task1 remove falsy value o/p')

// // ******************************************  Question: 2   ****************************************************************

// // Q2.Write a JavaScript program to flatten a nested(any depth) array into single level.
// // Sample array:
// // a)[1, [2], [3, [[4]]], [5, 6]]
// // Expected output: [1, 2, 3, 4, 5, 6]

// var arr = [1, [2],
//     [3, [
//         [4]
//     ]],
//     [5, [2],
//         [3, [
//             [4]
//         ]],
//         [5, 6], 6, [2],
//         [3, [
//             [4]
//         ]],
//         [5, 6]
//     ]
// ];
// let flattened = arr.flat(Infinity);
// console.log(flattened, '=> task2 flatten all array at same level o/p')

// // ******************************************  Question: 3   ****************************************************************

// // Q3.There are two arrays with individual values, write a JavaScript program to compute the
// // sum of respective index value from the given arrays.
// // Sample array:
// // a ) array1 = [1, 0, 2, 3, 4];
// // array2 = [3, 5, 6, 7, 8, 13];
// // Expected Output:
// // [4, 5, 8, 10, 12, 13]

// var array2 = [1, 0, 2, 3, 4, 1, 5, 8];
// var array1 = [3, 5, 6, 7, 8, 13, 1];
// var result = []
// var sum = [];


// result = array1.map((item, i) => item + array2[i]);
// var splice_holder;
// var difference;
// const areEqual = (array1, array2) => {
//     if (array1.length == array2.length) {
//         return true;
//     } else if (array1.length != array2.length) {

//         if (array1.length < array2.length) {
//             difference = array1.length - array2.length;
//             splice_holder = array2.splice(difference);
//         } else if (array1.length > array2.length) {
//             difference = array2.length - array1.length;
//             splice_holder = array1.splice(difference);
//         }

//     };
// }
// areEqual(array1, array2)

// // console.log(difference, '=>difference');
// // console.log(splice_holder, '=>splice_holder');
// var final = result.concat(splice_holder).filter(Boolean)
// console.log(final, '=> task3 add elements of same index in array o/p');

// *********************** task done by ajay *****************************

// // var array1 = [1, 2, 3];
// // var array2 = [100, 2, 1, 10];
// // var inner = [],
// //     outer = [];
// // var finalArray = array1
// //     .filter(x => !array2.includes(x))
// //     .concat(array2.filter(x => !array1.includes(x)))
// //     .sort((a, b) => a - b);
// // console.log(finalArray, '=> finalArray');

//************************************ task 4  ******************************************************** */

// var array1 = [1, 2, 3];
// var array2 = [100, 2, 1, 10];
// var new_array = array1.concat(array2);
// result = new_array.filter((item, i) => new_array.indexOf(item) === new_array.lastIndexOf(item));
// const result2 = result.sort((a, b) => a - b)
// console.log(result2)

// ***************************** task 6 given by rohit ******************************************

// var number = 8828688183
// var myString = number.toString().split('');
// let number_sorted = parseInt(myString.sort((a, b) => b - a).join(''));
// console.log(typeof number_sorted, number_sorted, '=>number_sorted')

//************************************** task 5 ************************************************************** */

// var array1 = ['abhay', 'shrilal', 'rohit', 'kartikey', 'kartikey'];
// var array2 = ['mishra', 'mallah', 'singh'];
// var result = []
// var sum = [];
// array11 = []

// var splice_holder;
// var difference;
// const areEqual = (array1, array2) => {
//     if (array1.length == array2.length) {
//         return true;
//     } else if (array1.length != array2.length) {

//         if (array1.length < array2.length) {
//             difference = array2.length - array1.length;
//             for (var i = 1; i <= difference; i++) {
//                 array1.push('')
//             }
//             // splice_holder = array2.splice(difference);
//         } else if (array1.length > array2.length) {
//             difference = array1.length - array2.length;
//             // console.log(difference, 'abhay')
//             // splice_holder = array1.splice(difference);
//             for (var i = 1; i <= difference; i++) {
//                 array2.push('')
//             }

//         }

//     };
// }
// areEqual(array1, array2)
// result = array1.map((item, i) => item + ' ' + array2[i]);
// var final = result.filter(Boolean).map(e => e.trim())
// console.log(final, '=> task5 add string elements of same index in array o/p');

// // result = array1.map((item, i) => {
// //     if (array2[i].includes(" ") || array1[i].includes(" ")) {
// //         item + array2[i]
// //     } else {
// //         item + ' ' + array2[i]
// //     }
// // })


// moke api
// https://api.covid19api.com/summary
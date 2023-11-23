// function createCounter() {
//     let count = 0;
//     return function() {
//       count++;
//       console.log(count);
//     };
//   }
  
//   const counter1 = createCounter();
//   counter1(); // logs 1
//   counter1(); // logs 2
//   counter1(); // logs 3


// const animals = ['lion', 'zebra', 'cat', 'eagle', 'shark', 'bird'];
// const animalsUpperCase = [];

// animals.forEach(function(animal) {
//     console.log(animal.toUpperCase());
// });


// let x =15;
// x= 16;
// console.log(x)


// function doSomethingAsync(callback) {
//     console.log('first')
//     setTimeout(function() {
//       callback();
//     }, 1000);
//   }
  
//   doSomethingAsync(function() {
//     console.log('Async task complete');
//   });
// ---------------------------------------

// function topK(arrayOfFrequency, k) {
//     const topKElements = [];
//     for (let i = arrayOfFrequency.length - 1; i >= 0; i--) {
//         if (arrayOfFrequency[i] !== undefined && k > 0) {
//             for (let j = 0; j < arrayOfFrequency[i].length && k > 0; j++) {
//                 topKElements.push(arrayOfFrequency[i][j]);
//                 k--;
//             }
//         }
//     }
//     return topKElements;
// }

// function topKFrequent(array, k) {
//     const frequency = new Map();
//     for (let number of array) {
//         if (frequency.has(number)) {
//             frequency.set(number, frequency.get(number) + 1);
//         } else {
//             frequency.set(number, 1);
//         }
//     }

//     const arrayOfFrequency = [];
//     for (let freq of frequency) {
//         if (!arrayOfFrequency[freq[1]]) {
//             arrayOfFrequency[freq[1]] = [freq[0]];
//         } else {
//             arrayOfFrequency[freq[1]].push(freq[0]);
//         }
//     }

//     for (let i = 0; i < arrayOfFrequency.length; i++) {
//         if (arrayOfFrequency[i] === undefined) {
//             arrayOfFrequency[i] = [];
//         }
//     }

//     return topK(arrayOfFrequency, k);
// }


// nums = [1,1,1,2,2,3]
// k = 2
// console.log(topKFrequent(nums,k))
// ---------------------------------------
function printResult(result) {
    console.log("Result: " + result);
  }
  
  function calculate(a, b, operation, callback) {
    let result;
    if (operation === "add") {
      result = a + b;
    } else if (operation === "subtract") {
      result = a - b;
    }

    setTimeout(function(){
        callback(result);
    },2000)
    // Execute the callback with the result as the argument
    
  }
  
  // Call the calculate function with a callback
  calculate(5, 3, "add", printResult); // Output: "Result: 8"
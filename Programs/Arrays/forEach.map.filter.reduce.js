// Arrays - forEach(), map(), filter(), reduce()

const arr = [1, 2, 3, "fizz", "buzz", 4, 5, "Interview.js"];

// forEach() -> Higher-Order-Function : Takes arr function and calls it over every element over the array it is called!

let forEach = arr.forEach(function(x) {
    if (typeof x === "string") {
        console.log(NaN);
    } else if (x % 2 === 0) {
        console.log(x);
    }
}); 

console.log(forEach); // undefined

/* 
 2
 NaN
 NaN
 4
 NaN
*/

// map() -> Higher-Order-Function : Takes arr function and calls it over every element of the array and throws an new array out of it!

const output = arr.map(x => typeof x);

console.log(output);

/*
[
  'number', 'number',
  'number', 'string',
  'string', 'number',
  'number', 'string'
]
*/


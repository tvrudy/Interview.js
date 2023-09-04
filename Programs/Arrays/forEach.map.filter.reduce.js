// Arrays - forEach(), map(), filter(), reduce()

const arr = [1, 2, 3, "fizz", "buzz", 4, 5, "Interview.js"];

// forEach() -> Higher-Order-Function : Takes arr function and calls it over every element over the array it is called!

let forEach = arr.forEach(function (x) {
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

// map() -> Higher-Order-Function : Takes a function and calls it over every element of the array and throws an new array out of it!

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

const users = [
    { firstName: "Uday", LastName: "Tiwari", age: 19 },
    { firstName: "Akshay", LastName: "Saini", age: 29 },
];

const fullNames = users.map(x => x.firstName + " " + x.LastName); // [ 'Uday Tiwari', 'Akshay Saini' ]

console.log(fullNames);

// filter() -> Higher-Order-Function : Takes a function to filter out specific elements in the given array and throws an new array out of it!

const onlyStrings = arr.filter(x => typeof x === "string");

console.log(onlyStrings); // [ 'fizz', 'buzz', 'Interview.js' ]

// reduce() -> reduces an array and accumulation of value(s), and is provided as an argument in the next call to the callback function!

const total = arr.reduce(function (acc, curr) {
    if (typeof curr === "number") {
        acc = acc + curr;
    }
    return acc;
}, 0);

console.log(total);

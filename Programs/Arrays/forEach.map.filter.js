// Arrays - forEach(), map(), filter()

let a = [1, 2, 3, "fizz", "buzz", 4, 5, "Interview.js"];

// forEach() -> Higher-Order-Function : Takes a function and calls it over every element over the array it is called!

a.forEach(function(x) {
    if (typeof x === "string") {
        console.log("NaN");
    } else if (x % 2 === 0) {
        console.log(x);
    }
});


// fetch() : fetch() just is a WEB_API function which makes a API call to an API server.
// The fetch() alike function which result in a Promise based callback are placed on a special place known as 'MicroTask Queue' 
// The MicroTask Queue have a higher priority than Callback Queue, hence all the callbacks from mtq are first executed in call stack!

// Mutation Observers are also placed on the mtq for executuion!

console.log("Start");

fetch("https://api.netflix.com").then(function cbF() {
    console.log("Connected!")
});

setTimeout(function cbT() {
    console.log("CB Timeout")
}, 5000);

console.log("End");

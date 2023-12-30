// Promises are just better way of doing callbacks!!
// A Promise is an object representing the eventual completion or failure of an asynchronous task.

// A promise can have three valid state :
    // - Pending 
    // - Rejected
    // - Fullfilled


const GITHUB_USER_INFO = "https://api.github.com/users/fosnix";

// Promise<Response>
const user_info = fetch(GITHUB_USER_INFO);

// You can also chain this!! 
user_info.then(function(Response) {
    console.log(Response)
});  

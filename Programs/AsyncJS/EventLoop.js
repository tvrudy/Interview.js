// Event-Loop in Modern JS

// Event Loop is a specific peice of Browser or JS Runtime which controls the execution of async code in JS without blocking the main thread with the help of a 'Callback Queue'

// Consider the following code :--

console.log("Start");

setTimeout(function cb() {
    console.log("Callback!")
}, 5000);

console.log("End");

/*
    JS_ENGINE =>

    |           |                                                                               -> setTimeout() {cb() gets registered in the WEB_API memory registor with a 5 sec Timer attached to it.} 
    | CallStack |   <- console.log("Start") {Pushed and Executed and Immediatly Poped Off} X    -> setTimeout() {when the attached Timer gets expired the cb() function then pushed to a callback queue!} X 
    |           |   <- console.log("End")   {Pushed and Executed and Immediatly Poped Off} X                                   |
    |           |                                       ------------------------------------------------ CALLBACK_QUEUE        |                                                                                  
    |           |      |----------|                      |------|                                                              |
    |           | <==  |Event-Loop|      <========       | cb() | <------------------------------------------------------------|            
    |           |      |--------- |                     |------| 
    -------------                                       ------------------------------------------------ -> The cb() function then passed to the event loop. The event loop checks for any code to be executed in the call stack, 
    
    if it found no sync code to executed it executed the callback one!
                                                                                                                            
*/

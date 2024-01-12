// Promise.all([Promises]) : ([Results] | Error)
/*
    Parallel call to each promise in the Promise[];
    Returns ->
        * Result of each Promise as an array of Response Values;
        * Throws an error corresponding to a Rejected Promise as soon as it happens;
*/ 

// Promise.allSettled([Promises]) : [Results]
/*
    Parallel call to each promise in the Promise[];
    Settles all the Promises if any and returns them;
    Returns -> 
        * Result of each Promise as an array of Response Values;
*/

// Promise.race([Promises]) : (Result | Error)
/*
    Parallel call to each promise in the Promise[];
    Returns -> 
        * Result of Promise which is resolved first;
        * Throws an error for the corresponding first settled Promise;
*/

// Promise.any([Promise]) : (Result | [AggregateError])
/* 
    Parallel call to each promise in the Promise[];
    Settles only for the first Resolveable Promise;
    Returns -> 
        * Returns the first Successfull/Fullfilled Promise;
        * If none of them are fullfilled, an array of errors(Aggregated Error) is Returned;
*/

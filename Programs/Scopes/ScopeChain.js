// Example 1 :
function a() {
    function b() {
        console.log(x); // var x = 100; 
    }
    b();
}

var x = 100;
a();

// Example 2 :
function c() {
    var k = 200;
    function d() {
        console.log(k); 
    }
    d();
}

c();
// console.log(k); // Error!

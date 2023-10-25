// A closure is a function bundled together with its lexical scope.

function x() {
    var a = 13;
    function y() {
        console.log(a); // Reference of 'a' is bound not is value!
    }
    a = 100;
    return y
}

let y = x();
y();

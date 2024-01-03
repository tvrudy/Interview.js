// Chaining of multiple promises together with rejetion/error handling! 

const cart = ["shoes", "pants", "bags"];

const promise = createOrder(cart);

promise
.then(function(oid) {
    console.log("Proceeds to Payment", oid);
    return oid;
})
.then(function(oid) {
    return proceedToPayment(oid);
})
.then(function(paymentInfo) {
    console.log(paymentInfo);
})
.catch(function(err) {
    console.log("Order not Valid :", err.message);
});

function createOrder(cart) {

    const pr = new Promise(function(resolve, reject) {
        // Following Tasks can be done while evaluating the promise :

        // createOrder here -
        // validate Cart -
        // OrderID -

        // Order Validation
        if (!validate(cart)) {
            const err = new Error("Rejected");
            reject(err); // The reason for rejection can be stored here!
        }

        // Call to the DB while quering out the correct orderId based on the cart

        // const orderId = DBcall.getOrderId(cart);

        const orderId = "12345"; // Just in Case, since i don't have a configured db for this purpose!
        if (orderId) resolve(orderId);

    }); 

    return pr;
} 

function proceedToPayment(OrderId) {
    return new Promise(function(resolve, reject) {
        resolve(`Payment Successfull! : ${OrderId}`);
    });
}

function validate(cart) {
    return true;
}

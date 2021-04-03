// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}


var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob'
}



function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}



const leastFavoriteCustomer = 'timmy';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'dan';
}




//Test stuff
// console.log(customerName);

// upperCaseCustomerName(customerName);

// console.log(customerName);
console.log(leastFavoriteCustomer);
changeLeastFavoriteCustomer();
console.log(leastFavoriteCustomer);
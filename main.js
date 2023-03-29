
//Passager information.
let passagerAge = prompt("How old are you?");
let kilometres = prompt("How many kilometers to your destination?");

passagerAge = parseInt(passagerAge);
kilometres = parseInt(kilometres);

console.log("Your age is: " + passagerAge);
console.log("The distance is: " + kilometres);

//Ticket information.
let ticketPrice = 0.21 * kilometres;
const decimalValue = ticketPrice.toFixed(2);
let underage = passagerAge < 18;
let overSixtfifth = passagerAge > 65;

console.log("The ticket price: " + ticketPrice);
console.log("Ticket price in decimal value: " + decimalValue + "£");

//Ticket price value.
if(underage) {

    let underageDiscount = ticketPrice * 20 / 100;
    let underTicket = decimalValue - underageDiscount;
    console.log("Total wiht discount 20%: " + underTicket + "£");

} else if (overSixtfifth) {

    let overSixtfifthDiscount = ticketPrice * 40 / 100;
    let overTicket = decimalValue - overSixtfifthDiscount;
    console.log("Total whith discount 40%: " + overTicket + "£");

} else {
    let totalPrice = decimalValue;
    console.log("Total: " + totalPrice + "£");
}



//Passager information.
let passagerAge = prompt("How old are you?");
let kilometres = prompt("How many kilometers to your destination?");

passagerAge = parseInt(passagerAge);
kilometres = parseInt(kilometres);

//Ticket information.
let ticketPrice = 0.21 * kilometres;
const decimalValue = ticketPrice.toFixed(2);
let underage = passagerAge < 18;
let overSixtfifth = passagerAge > 65;

//Ticket price value.
if(underage) {

    let underageDiscount = ticketPrice * 20 / 100;
    let underTotalPrice = decimalValue - underageDiscount;
} else if {

    let overSixtfifthDiscount = ticketPrice * 40 / 100;
    let overTotalPrice = decimalValue - overSixtfifthDiscount;
}
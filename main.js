
//Passager information.
let passagerAge = prompt("How old are you?");
let kilometres = prompt("How many kilometers to your destination?");

passagerAge = parseInt(passagerAge);
kilometres = parseInt(kilometres);

console.log("Your age is: " + passagerAge);
console.log("The distance is: " + kilometres);

document.getElementById("p-age").innerHTML = passagerAge;
document.getElementById("p-kilometres").innerHTML = kilometres;

//Ticket information.
let ticketPrice = 0.21 * kilometres;
const decimalValue = ticketPrice.toFixed(2);
let underage = passagerAge < 18;
let overSixtfifth = passagerAge > 65;

console.log("The ticket price: " + ticketPrice);
console.log("Ticket price in decimal value: " + decimalValue + "£");

document.getElementById("p-total").innerHTML = decimalValue;

//Ticket price value.
if(underage) {

    let underageDiscount = ticketPrice * 20 / 100;
    let underTicket = decimalValue - underageDiscount;
    console.log("Total wiht discount 20%: " + underTicket + "£");

    document.getElementById("p-underticket").innerHTML = underTicket;

} else if (overSixtfifth) {

    let overSixtfifthDiscount = ticketPrice * 40 / 100;
    let overTicket = decimalValue - overSixtfifthDiscount;
    console.log("Total whith discount 40%: " + overTicket + "£");

    document.getElementById("p-overticket").innerHTML = overTicket;

} else {

    let totalPrice = decimalValue;
    console.log("Total: " + totalPrice + "£");

    document.getElementById("p-totalprice").innerHTML = totalPrice;
}




// Raccolgo tutti gli elementi che mi occorrono

const passengerName = document.getElementById("passenger-name");
const distanceToGo = document.getElementById("distance");
const passengerAge = document.getElementById("age");
const confirmButton = document.getElementById("generate");
const resetButton = document.getElementById("reset");
const discountGift = document.quesrySelector(".gift");
const trainCarriage = document.quesrySelector(".carriage");
const code = document.quesrySelector(".cp-code");
const finalPrice = document.quesrySelector(".final-price");
const ticketSection = document.querySelector(".ticket-row.d-none");

// creo le variabili di base

const pricePerKm = 0.21;
const underDiscount = 20;
const overDiscount = 40;
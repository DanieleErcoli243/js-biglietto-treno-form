// Raccolgo tutti gli elementi che mi occorrono

const passengerName = document.getElementById("passenger-name");
const distanceToGo = document.getElementById("distance");
const passengerAge = document.getElementById("age");
const confirmButton = document.getElementById("generate");
const resetButton = document.getElementById("reset");
const discountGift = document.querySelector(".gift");
const trainCarriage = document.querySelector(".carriage");
const code = document.querySelector(".cp-code");
const finalPrice = document.querySelector(".final-price");
const ticketSection = document.querySelector(".ticket-row.d-none");
// creo le variabili di base

const pricePerKm = 0.21;
const underDiscount = 20;
const overDiscount = 40;
let giftType = "Offerta Standard";

// faccio reagire il botton di conferma al click

confirmButton.addEventListener("click", function(){
    // recupero i valori del form
    const name = passengerName.value.trim();
    const distance = parseInt(distanceToGo.value);
    const age = passengerAge.value.trim();
    // Ricorda di convalidare i valori

    // calcolo del prezzo di base
    let price = pricePerKm * distance;
})
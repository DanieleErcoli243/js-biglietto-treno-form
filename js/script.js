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
const ticketSection = document.querySelector(".ticket-row");
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
    if (!name || isNaN(distance) || isNaN(age) || distance < 0 || age < 0){
        alert("I dati che hai inserito non sono corretti. Prego riempire i campi colle informazioni corrette")
        return;
    }

    // calcolo del prezzo di base
    let price = pricePerKm * distance;
    // calcolo dello sconto
    if (age === "under"){
        giftType = "Offerta iunior";
        price = (price / 100) * 20;
    } else if (age === "over") {
        giftType = "Offerta senior";
        price = (price / 100) * 40;
    }

    // genero un numero casuale per la carrozza

    const car = Math.floor(Math.random() * 5) + 1;
    
    // genero un numero casuale a cinque cifre per il biglietto

    const cpCode = Math.floor(Math.random() * (100000 - 90000) + 90000);

    // creo i contenuti dei campi del bigliett
    passengerName.innerText = name;
    discountGift.innerText = giftType; 
    trainCarriage.innerText = car; 
    code.innerText = cpCode;
    finalPrice.innerText = "€" + price.toFixed(2);

    // faccio apparire il biglietto
    ticketSection.classList.remove("d-none");
})
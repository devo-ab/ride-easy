// buy ticket click function
function buy (){
    window.scrollBy(0, 1700);
}

// Coupon hide function
function cuponApply (){
    const inputCupon = document.getElementById('input-copun');
    input = inputCupon.value;
    
    const divCupoun = document.getElementById('cupon-div');

    if(input === 'NEW15' || input === 'Couple 20'){
        divCupoun.classList.add('hidden')
    }
}


function forA1 (){
    const getA1 = document.getElementById('A1');
    getA1.classList.add('bg-[#1DD100]');
    const A1Details = document.getElementById('A1-details');
    A1Details.classList.remove('hidden');

    // availableSeat
    const availableSeat = document.getElementById('available-seat');
    const availableSeatText = availableSeat.innerText;
    const availseat = parseInt(availableSeatText);
    const updatedseat = availseat - 1;
    availableSeat.innerText = updatedseat;

    // selected seat
    const selectedSeat = document.getElementById('selected-seat');
    const selectedSeatText = selectedSeat.innerText;
    const selected = parseInt(selectedSeatText);
    const updatedSelected = selected + 1;
    selectedSeat.innerText = updatedSelected;

    // seat price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const total = parseInt(totalPriceText);
    const updatedPrice = total + 550;
    totalPrice.innerText = updatedPrice;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = updatedPrice;
}

function forA2 (){
    const getA2 = document.getElementById('A2');
    getA2.classList.add('bg-[#1DD100]');
    const A2Details = document.getElementById('A2-details');
    A2Details.classList.remove('hidden');

    // availableSeat
    const availableSeat = document.getElementById('available-seat');
    const availableSeatText = availableSeat.innerText;
    const availseat = parseInt(availableSeatText);
    const updatedseat = availseat - 1;
    availableSeat.innerText = updatedseat;

    // selected seat
    const selectedSeat = document.getElementById('selected-seat');
    const selectedSeatText = selectedSeat.innerText;
    const selected = parseInt(selectedSeatText);
    const updatedSelected = selected + 1;
    selectedSeat.innerText = updatedSelected;

    // seat price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const total = parseInt(totalPriceText);
    const updatedPrice = total + 550;
    totalPrice.innerText = updatedPrice;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = updatedPrice;
}

function forA3 (){
    const getA3 = document.getElementById('A3');
    getA3.classList.add('bg-[#1DD100]');
    const A3Details = document.getElementById('A3-details');
    A3Details.classList.remove('hidden');

    // availableSeat
    const availableSeat = document.getElementById('available-seat');
    const availableSeatText = availableSeat.innerText;
    const availseat = parseInt(availableSeatText);
    const updatedseat = availseat - 1;
    availableSeat.innerText = updatedseat;

    // selected seat
    const selectedSeat = document.getElementById('selected-seat');
    const selectedSeatText = selectedSeat.innerText;
    const selected = parseInt(selectedSeatText);
    const updatedSelected = selected + 1;
    selectedSeat.innerText = updatedSelected;

    // seat price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const total = parseInt(totalPriceText);
    const updatedPrice = total + 550;
    totalPrice.innerText = updatedPrice;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = updatedPrice;
}

function forA4 (){
    const getA4 = document.getElementById('A4');
    getA4.classList.add('bg-[#1DD100]');
    const A4Details = document.getElementById('A4-details');
    A4Details.classList.remove('hidden');

    // availableSeat
    const availableSeat = document.getElementById('available-seat');
    const availableSeatText = availableSeat.innerText;
    const availseat = parseInt(availableSeatText);
    const updatedseat = availseat - 1;
    availableSeat.innerText = updatedseat;

    // selected seat
    const selectedSeat = document.getElementById('selected-seat');
    const selectedSeatText = selectedSeat.innerText;
    const selected = parseInt(selectedSeatText);
    const updatedSelected = selected + 1;
    selectedSeat.innerText = updatedSelected;

    // seat price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const total = parseInt(totalPriceText);
    const updatedPrice = total + 550;
    totalPrice.innerText = updatedPrice;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = updatedPrice;
}

function forB1 (){
    const getB1 = document.getElementById('B1');
    getB1.classList.add('bg-[#1DD100]');
    const B1Details = document.getElementById('B1-details');
    B1Details.classList.remove('hidden');

    // availableSeat
    const availableSeat = document.getElementById('available-seat');
    const availableSeatText = availableSeat.innerText;
    const availseat = parseInt(availableSeatText);
    const updatedseat = availseat - 1;
    availableSeat.innerText = updatedseat;

    // selected seat
    const selectedSeat = document.getElementById('selected-seat');
    const selectedSeatText = selectedSeat.innerText;
    const selected = parseInt(selectedSeatText);
    const updatedSelected = selected + 1;
    selectedSeat.innerText = updatedSelected;

    // seat price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const total = parseInt(totalPriceText);
    const updatedPrice = total + 550;
    totalPrice.innerText = updatedPrice;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = updatedPrice;
}

function forB2 (){
    const getB2 = document.getElementById('B2');
    getB2.classList.add('bg-[#1DD100]');
    const B2Details = document.getElementById('B2-details');
    B2Details.classList.remove('hidden');

    // availableSeat
    const availableSeat = document.getElementById('available-seat');
    const availableSeatText = availableSeat.innerText;
    const availseat = parseInt(availableSeatText);
    const updatedseat = availseat - 1;
    availableSeat.innerText = updatedseat;

    // selected seat
    const selectedSeat = document.getElementById('selected-seat');
    const selectedSeatText = selectedSeat.innerText;
    const selected = parseInt(selectedSeatText);
    const updatedSelected = selected + 1;
    selectedSeat.innerText = updatedSelected;

    // seat price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const total = parseInt(totalPriceText);
    const updatedPrice = total + 550;
    totalPrice.innerText = updatedPrice;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = updatedPrice;
}

function forB3 (){
    const getB3 = document.getElementById('B3');
    getB3.classList.add('bg-[#1DD100]');
    const B3Details = document.getElementById('B3-details');
    B3Details.classList.remove('hidden');

    // availableSeat
    const availableSeat = document.getElementById('available-seat');
    const availableSeatText = availableSeat.innerText;
    const availseat = parseInt(availableSeatText);
    const updatedseat = availseat - 1;
    availableSeat.innerText = updatedseat;

    // selected seat
    const selectedSeat = document.getElementById('selected-seat');
    const selectedSeatText = selectedSeat.innerText;
    const selected = parseInt(selectedSeatText);
    const updatedSelected = selected + 1;
    selectedSeat.innerText = updatedSelected;

    // seat price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const total = parseInt(totalPriceText);
    const updatedPrice = total + 550;
    totalPrice.innerText = updatedPrice;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = updatedPrice;
}

function forB4 (){
    const getB4 = document.getElementById('B4');
    getB4.classList.add('bg-[#1DD100]');
    const B4Details = document.getElementById('B4-details');
    B4Details.classList.remove('hidden');

    // availableSeat
    const availableSeat = document.getElementById('available-seat');
    const availableSeatText = availableSeat.innerText;
    const availseat = parseInt(availableSeatText);
    const updatedseat = availseat - 1;
    availableSeat.innerText = updatedseat;

    // selected seat
    const selectedSeat = document.getElementById('selected-seat');
    const selectedSeatText = selectedSeat.innerText;
    const selected = parseInt(selectedSeatText);
    const updatedSelected = selected + 1;
    selectedSeat.innerText = updatedSelected;

    // seat price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const total = parseInt(totalPriceText);
    const updatedPrice = total + 550;
    totalPrice.innerText = updatedPrice;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = updatedPrice;
}

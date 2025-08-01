// Scroll down when Buy Ticket is clicked
function buy() {
  window.scrollBy(0, 2000);
}
// Scroll down when Buy Ticket is clicked

// Handle coupon apply
function cuponApply() {
  const inputCupon = document.getElementById("input-copun");
  const applyBtn = document.getElementById("apply-button");
  const couponCode = inputCupon.value.trim();

  if (selectedCount === 0) {
    alert("Please select at least one seat before applying a coupon.");
    return;
  }

  if (couponCode === "NEW15") {
    appliedCoupon = "NEW15";
    applyDiscount();
    inputCupon.disabled = true;
    applyBtn.disabled = true;
    applyBtn.classList.add("opacity-50", "cursor-not-allowed");
    inputCupon.classList.add("opacity-50", "cursor-not-allowed");
  } else if (couponCode === "Couple 20") {
    appliedCoupon = "Couple 20";
    applyDiscount();
    inputCupon.disabled = true;
    applyBtn.disabled = true;
    applyBtn.classList.add("opacity-50", "cursor-not-allowed");
    inputCupon.classList.add("opacity-50", "cursor-not-allowed");
  } else {
    alert("Invalid coupon code!");
  }
}

function applyDiscount() {
  let discount = 0;

  if (appliedCoupon === "NEW15") {
    discount = totalCost * 0.15;
  } else if (appliedCoupon === "Couple 20") {
    discount = totalCost * 0.2;
  }

  grandTotalEl.innerText = (totalCost - discount).toFixed(2);
}

// Handle coupon apply

// Global state
const maxSeats = 4;
let selectedCount = 0;
let totalCost = 0;
let appliedCoupon = null;
const selectedSeatsList = new Set();
// Global state

// get DOM elements
const availableSeatEl = document.getElementById("available-seat");
const availableSeat = document.getElementById("available");
const selectedSeatEl = document.getElementById("selected-seat");
const totalPriceEl = document.getElementById("total-price");
const grandTotalEl = document.getElementById("grand-total");
const seatDetailsBody = document.getElementById("seat-details-body");
const selectedSeatsNames = document.getElementById("selected-seats-names");
// get DOM elements

// update seat details and price
function updateSummary() {
  selectedSeatEl.innerText = selectedCount;
  availableSeatEl.innerText = 45 - selectedCount;
  availableSeat.innerText = 45 - selectedCount;
  totalPriceEl.innerText = totalCost.toFixed(2);
  grandTotalEl.innerText = totalCost.toFixed(2);

  selectedSeatsNames.innerText = Array.from(selectedSeatsList).join(", ") || "None";

  if (appliedCoupon) {
  applyDiscount();
} else {
  grandTotalEl.innerText = totalCost.toFixed(2);
}
}
// update seat details and price

// select seat function
function selectSeat(button) {
  const seatId = button.getAttribute("data-seat");
  const price = parseInt(button.getAttribute("data-price")) || 550;
  const seatClass = "Economy";

  if (button.classList.contains("selected")) return;

  if (selectedCount >= maxSeats) {
    alert(`You can only select up to ${maxSeats} seats.`);
    return;
  }

  button.classList.add("bg-green-500", "text-white", "selected");

  selectedSeatsList.add(seatId);
  selectedCount++;
  totalCost += price;

  availableSeatEl.innerText = parseInt(availableSeatEl.innerText) - 1;

  const row = document.createElement("tr");
  row.id = `seat-row-${seatId}`;
  row.className = "border-b border-dashed border-[#030712]";
  row.innerHTML = `
    <td class="w-1/3 text-left py-2 text-[#030712]">${seatId}</td>
    <td class="w-1/3 text-left py-2 text-[#030712]">${seatClass}</td>
    <td class="w-1/3 text-left py-2 text-[#030712]">${price}</td>
  `;
  seatDetailsBody.appendChild(row);

  const detailRow = document.getElementById(`${seatId}-details`);
  if (detailRow) detailRow.classList.remove("hidden");

  updateSummary();
}
// select seat function

// unselect seat function
function unselectSeat(button) {
  const seatId = button.getAttribute("data-seat");
  const price = parseInt(button.getAttribute("data-price")) || 550;

  if (!button.classList.contains("selected")) return;

  button.classList.remove("bg-green-500", "text-white", "selected");

  selectedSeatsList.delete(seatId);
  selectedCount--;
  totalCost -= price;

  availableSeatEl.innerText = parseInt(availableSeatEl.innerText) + 1;

  const rowToRemove = document.getElementById(`seat-row-${seatId}`);
  if (rowToRemove) {
    seatDetailsBody.removeChild(rowToRemove);
  }

  const detailRow = document.getElementById(`${seatId}-details`);
  if (detailRow) detailRow.classList.add("hidden");

  updateSummary();
}
// unselect seat function

document.addEventListener("DOMContentLoaded", function () {
  // Attach seat click and dblclick events
  document.querySelectorAll(".seat-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("selected")) {
        selectSeat(button);
      }
    });

    button.addEventListener("dblclick", () => {
      if (button.classList.contains("selected")) {
        unselectSeat(button);
      }
    });
  });

  updateSummary();

  // Coupon apply button handler
  const applyBtn = document.getElementById("apply-coupon-btn");
  if (applyBtn) {
    applyBtn.addEventListener("click", cuponApply);
  }
});

// form validation
function validateAndShowModal() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || phone === "" || email === "") {
    alert("Please fill in all fields before continuing.");
    return;
  }

  //email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // phone number validation
  if (!/^\d{10,15}$/.test(phone)) {
    alert("Please enter a valid phone number.");
    return;
  }

  if (selectedCount === 0) {
    alert("Please select a seat.");
    return;
  }

  //show the modal
  const modal = document.getElementById("my_modal");
  if (modal && typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    alert("Modal not found or unsupported browser.");
  }
}
// form validation

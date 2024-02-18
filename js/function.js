const seats = document.querySelectorAll(".seat");
// console.log(seats);

const array = [];
let totalSeat = 40;
let count = 0;
let totalPrice = 0;
const price = 550;
let grandTotal;
const input = document.getElementById("phone-number-input");

// input.addEventListener("keyup", function (e) {
//   const keypress = e.target;
//   if (keypress && array.length > 0) {
//     const nextButton = document.getElementById("next-btn");
//     nextButton.removeAttribute("disabled");
//   }
// });

for (let seat of seats) {
  seat.addEventListener("click", function (event) {
    const seatName = event.target.innerText;

    if (array.includes(seatName) === false) {
      array.push(seatName);
      totalSeat = totalSeat - 1;
      count = count + 1;
      totalPrice = price + totalPrice;

      const numberFied = document.getElementById("phone-number-input");
      const number = numberFied.value;
      if (array.length > 0 && number.length > 0) {
        const nextButton = document.getElementById("next-btn");
        nextButton.removeAttribute("disabled",true);
      }
      input.addEventListener("keyup", function (e) {
        const keypress = e.target;

        if (keypress) {
          const nextButton = document.getElementById("next-btn");
          nextButton.removeAttribute("disabled");
        }
      });

      if (array.length > 4) {
        alert("You Buy Maximum Ticket");

        return;
      } else if (array.length === 4) {
        const btn = document.getElementById("apply-btn");
        btn.removeAttribute("disabled");
      }
    } else {
      return;
    }

    setElementInnerTextById("grand-total", totalPrice);
    setElementInnerTextById("total-price", totalPrice);
    setElementInnerTextById("seat-count", count);
    setElementInnerTextById("seat-left", totalSeat);
    seat.classList.add("bg-[rgb(29,209,0)]");
    setElementById("seat-name", seatName);
    setElementById("class", "Economoy");
    setElementById("seat-price", price);
  });
}

// console.log(document.getElementById("phone-number-input"));
// const numberFied = document.getElementById("phone-number-input");
// const number = numberFied.value;

// const numberFied = document.getElementById("phone-number-input");
// const number = numberFied.value;
// console.log(number);
// if (number >= 0) {
//   const nextButton = document.getElementById("next-btn");
//   nextButton.removeAttribute("disabled");
// }

const discountContainer = document.getElementById("discount-container");

document.getElementById("apply-btn").addEventListener("click", function () {
  const inputField = document.getElementById("coupon-input");
  const inputValue = inputField.value;

  discountContainer.classList.remove("hidden");
  if (inputValue === "NEW15") {
    const totalPrice = getElementById("total-price");
    const discount = (totalPrice * 15) / 100;
    const grandTotal = getElementById("grand-total");
    const discountedPrice = grandTotal - discount;
    const couponContainer = document.getElementById("coupon-container");
    couponContainer.classList.add("hidden");
    setElementInnerTextById("discount-price", discount);
    setElementInnerTextById("grand-total", discountedPrice);
  } else if (inputValue === "Couple 20") {
    const totalPrice = getElementById("total-price");
    const discount = (totalPrice * 20) / 100;
    const grandTotal = getElementById("grand-total");
    const discountedPrice = grandTotal - discount;
    const couponContainer = document.getElementById("coupon-container");
    couponContainer.classList.add("hidden");
    setElementInnerTextById("discount-price", discount);
    setElementInnerTextById("grand-total", discountedPrice);
  } else {
    alert("Invalid Coupon Code");
  }
});

const seats = document.querySelectorAll(".seat");
// console.log(seats);

const array = [];
let totalSeat = 40;
let count = 0;
let totalPrice = 0;
const price = 550;
let grandTotal;

for (let seat of seats) {

  seat.addEventListener("click", function (event) {
    const seatName = event.target.innerText;

    if (array.includes(seatName) === false) {
      array.push(seatName);
      totalSeat = totalSeat - 1;
      count = count + 1;
      totalPrice = price + totalPrice;

      
      if (array.length > 4) {
          alert("You Buy Maximum Ticket");
        return;
        }
      else if(array.length === 4){
        const btn = document.getElementById('apply-btn');
        btn.removeAttribute('disabled');
      }

    }
    else{
        return;
    }
    

    setElementInnerTextById('grand-total',totalPrice)
    setElementInnerTextById('total-price',totalPrice)
    setElementInnerTextById('seat-count',count)
    setElementInnerTextById('seat-left',totalSeat)
    seat.classList.add("bg-[rgb(29,209,0)]");
    setElementById("seat-name", seatName);
    setElementById("class", "Economoy");
    setElementById("seat-price", price);
  });
}

const discountContainer = document.getElementById('discount-container')

document.getElementById('apply-btn').addEventListener('click',function(){
    const inputField = document.getElementById('coupon-input');
    const inputValue = inputField.value;
    
    discountContainer.classList.remove('hidden');
    if(inputValue === 'NEW15'){
     const totalPrice = getElementById('total-price');
     const discount = totalPrice * 15 / 100;
     const grandTotal = getElementById('grand-total');
     const discountedPrice = grandTotal - discount;
     setElementInnerTextById('discount-price',discount);
     setElementInnerTextById('grand-total',discountedPrice)
    }
    else if(inputValue === 'Couple20'){
      const totalPrice = getElementById('total-price');
     const discount = totalPrice * 20 / 100;
     const grandTotal = getElementById('grand-total');
     const discountedPrice = grandTotal - discount;
     setElementInnerTextById('discount-price',discount);
     setElementInnerTextById('grand-total',discountedPrice)
    }
    // console.log(inputValue);
    // if(inputValue === 'NEW15'){
    // }
})
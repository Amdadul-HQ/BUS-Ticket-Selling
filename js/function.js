const seats = document.querySelectorAll(".seat");
// console.log(seats);

const array = [];
let totalSeat = 40;
let count = 0;
let totalPrice = 0;
const price = 550;


function setElementById(elementId, value) {
  const element = document.getElementById(elementId);
  const li = document.createElement("li");
  li.setAttribute("class", "font-inter");
  li.innerText = value;
  element.appendChild(li);
}

function getElementById(elementId) {
    const element = document.getElementById(elementId);
    elementInnerNumber = parseInt(element.innerText);
    return elementInnerNumber;
}

function setElementInnerTextById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


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
    }
    else{
        return;
    }
    
    setElementInnerTextById('total-price',totalPrice)
    setElementInnerTextById('seat-count',count)
    setElementInnerTextById('seat-left',totalSeat)
    seat.classList.add("bg-[rgb(29,209,0)]");
    setElementById("seat-name", seatName);
    setElementById("class", "Economoy");
    setElementById("seat-price", price);
  });
}

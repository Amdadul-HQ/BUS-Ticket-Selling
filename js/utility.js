const seats = document.querySelectorAll(".seat");

function setElementById(elementId, value) {
  const element = document.getElementById(elementId);
  const li = document.createElement("li");
  li.setAttribute("class", "font-inter");
  li.innerText = value;
  element.appendChild(li);
}


function getElementById(elementId) {
  const element = document.getElementById(elementId);
  elementInnerText = parseInt(element.innerText);
  return elementInnerText;
}


let totalSeat = 40;

const array = [];

for (let seat of seats) {
  seat.addEventListener("click", function () {
    const price = 550;
    const seatName = seat.innerText;


    if(array.includes(seatName) === false) {
      array.push(seatName);
        totalSeat = totalSeat - 1;
        
        if(array.length > 4){
            alert('You Buy Maximum Ticket')
            totalSeat = totalSeat - 1;
            return;
        }
    }
    else{
      return;
    }
    document.getElementById('seat-left').innerText = totalSeat
    setElementById("seat-name", seatName);
    setElementById("class", "Economoy");
    setElementById("seat-price", price);
    seat.classList.add("bg-[rgb(29,209,0)]");
  });
}
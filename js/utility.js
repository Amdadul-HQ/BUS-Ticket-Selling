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
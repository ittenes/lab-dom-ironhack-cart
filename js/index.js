function deleteItem(event) {
  var parent = event.currentTarget.parentNode.parentNode

  parent.parentNode.removeChild(parent)

}



function getPriceByProduct(itemNode) {
  var precioId = itemNode.getElementsByClassName("precio")[0].textContent;

  return precioId
}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  const inputQTs = document.getElementsByClassName("input")
  console.log("TCL: getTotalPrice -> inputQTs", inputQTs)

  for (let i = 0; i < inputQTs.length; i++) {
    inputQT = inputQTs[i].value
    console.log("TCL: getTotalPrice -> inputQT", inputQT)
    inputQTNode = inputQTs[i].parentNode.parentNode;
    console.log("TCL: getTotalPrice -> inputQTNode", inputQTNode)
    precioValue = Number(getPriceByProduct(inputQTNode));
    console.log("TCL: getTotalPrice -> precioValue", precioValue)
    inputQTNode.getElementsByClassName('total')[0].innerHTML = (Number(inputQT) * Number(precioValue));
  }

  // inputQTs.forEach(function (element) {
  //   inputQT = element.value
  //   inputQTNode = element.parentNode.parentNode;
  //   precioValue = Number(getPriceByProduct(inputQTNode));
  //   inputQTNode.getElementsByClassName('total')[0].innerHTML = (Number(inputQT) * Number(precioValue));
  // })

  calculateTotalPrice();
}

function calculateTotalPrice() {
  let arrElements = document.getElementsByClassName("total");
  var sumaValue = 0

  for (let i = 0; i < arrElements.length; i++) {
    sumaValue += Number(arrElements[i].textContent)
  }

  document.getElementById('total-value').innerHTML = Number(sumaValue);
}

function createQuantityInput() {

}

function createDeleteButton() {
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

  let itemName = document.getElementById("new-name").value;
  let itemUnitPrice = document.getElementById("new-cost").value;

  let nodeParent = document.getElementById("all-wrapper")
  let div = document.createElement("div")
  div.className = "wrapper"
  div.innerHTML = `
    <div>
      <span>${itemName}</span>
    </div>
    <div>
      <span class="euro precio">${itemUnitPrice}</span>
    </div>
    <div class="quantity">
      QT: <input class="input" type="text" name="fname" />
    </div>
    <div>
      <span class="euro total">0.00</span>
    </div>
    <div>
      <button class="btn btn-delete ">delete</button>
    </div>
  `;
  nodeParent.appendChild(div)
  createDeleteButton();
  createNewItemRow(itemName, itemUnitPrice);
}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;


  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

};
function deleteItem(event) {

}

function getPriceByProduct(itemNode) {
  var precioId = document.getElementById(itemNode).textContent;;
  return precioId
}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

  const inputQT = document.querySelector("input")
  const precioValue = getPriceByProduct("precio");

  document.getElementById("total").innerHTML = (Number(inputQT.value) * Number(precioValue));
}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

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
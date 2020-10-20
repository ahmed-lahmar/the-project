let date =new Date
let now = date.getHours()+":"+date.getMinutes()
const addButton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const container = document.querySelector(".container");

function item(itemName) {
  function createDiv(itemName) {
 
    var input = document.createElement("input"); 
    input.value = itemName;
    input.disabled = true;
    input.type = "text";
    input.classList.add("item_input"); 

  
    var itemBox = document.createElement("div");
    itemBox.classList.add("item");

    
    var editButton = document.createElement("button"); 
    editButton.innerHTML = "CHANGE";
    editButton.classList.add("editButton");

    var removeButton = document.createElement("button"); 
    removeButton.innerHTML = "DELETE"+"  "+String(now);
    removeButton.classList.add("removeButton");


    container.appendChild(itemBox);
    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    editButton.addEventListener("click", () => edit(input)); 
    removeButton.addEventListener("click", () => remove(itemBox)); 
  }

  function edit(input) {
    input.disabled = !input.disabled;
  }

  function remove(itemBox) {
    container.removeChild(itemBox);
  }

  createDiv(itemName);
}

function check() {
  if (input.value !== "") {
    new item(input.value);
    input.value = "";
  }
}

addButton.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    check();
  }
});

let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];

let divContainer = document.getElementById("orderedItemsContainer");
let unorderedItem = document.createElement("ul");
unorderedItem.type = "none";
divContainer.appendChild(unorderedItem);

for (let i = 0; i < itemList.length; i++) {
    let listItem = document.createElement("li");
    listItem.id = "item" + itemList[i].uniqueNo;

    let labelElement = document.createElement("label");
    labelElement.textContent = itemList[i].itemName;

    let buttonElement = document.createElement("button");
    buttonElement.id = "button" + itemList[i].uniqueNo;
    buttonElement.textContent = "Cancel";

    buttonElement.onclick = function() {
        unorderedItem.removeChild(listItem);
    }

    listItem.appendChild(labelElement);
    listItem.appendChild(buttonElement);
    unorderedItem.appendChild(listItem);
}

let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

let divContainer = document.getElementById("skillsContainer");
let unorderedList = document.createElement("ul");
unorderedList.type = "none";
divContainer.appendChild(unorderedList);
for (let i = 0; i < skillList.length; i++) {
    let listItem = document.createElement("li");

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkbox" + skillList[i].uniqueNo;

    let labelElement = document.createElement("label");
    labelElement.id = "label" + skillList[i].uniqueNo
    labelElement.setAttribute("for", inputElement.id);

    let item = skillList[i].skillName;
    labelElement.textContent = item;

    inputElement.onclick = function() {
        if (inputElement.checked) {
            labelElement.style.color = "green";
        } else {
            labelElement.style.color = "black";
        }

    }
    listItem.appendChild(inputElement);
    listItem.appendChild(labelElement);
    unorderedList.appendChild(listItem);
}

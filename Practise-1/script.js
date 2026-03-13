let divContainer = document.getElementById("checkBoxWithLabelContainer");

let checkBoxElement = document.createElement("input");
checkBoxElement.type = "checkbox";
checkBoxElement.id = "checkbox";
divContainer.appendChild(checkBoxElement);

let checkBoxLabelElement = document.createElement("label");
checkBoxLabelElement.textContent = "I am a Label";
checkBoxLabelElement.id = "checkboxLabel";
checkBoxLabelElement.setAttribute("for", "checkbox");
checkBoxElement.onclick = function() {
    if (checkBoxElement.checked) {
        checkBoxLabelElement.style.textDecoration = "line-through";
    } else {
        checkBoxLabelElement.style.textDecoration = "none";
    }

};
divContainer.appendChild(checkBoxLabelElement);

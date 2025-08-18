// JavaScript DOM Example

function showDOMExamples() {
    // getElementById example
    let getIdResult = document.getElementById("demoText").textContent;
    document.getElementById("getIdEx").textContent = 'getElementById: "demoText" content is "' + getIdResult + '"';

    // querySelector example
    let queryResult = document.querySelector(".demo span").textContent;
    document.getElementById("queryEx").textContent = 'querySelector: .demo span content is "' + queryResult + '"';

    // createElement and appendChild example
    let newElem = document.createElement("div");
    newElem.textContent = "New element added!";
    document.getElementById("createEx").textContent = 'createElement: "' + newElem.textContent + '"';
    // Not appending to DOM to avoid clutter
}

function changeText() {
    document.getElementById("demoText").textContent = "Text changed by JavaScript!";
}

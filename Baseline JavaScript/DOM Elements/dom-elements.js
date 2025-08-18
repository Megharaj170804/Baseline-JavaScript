// JavaScript DOM Elements Example

function showClassElements() {
    let elements = document.getElementsByClassName("intro");
    let result = [];
    for (let i = 0; i < elements.length; i++) {
        result.push(elements[i].textContent);
    }
    document.getElementById("classDemo").innerHTML = 'Elements with class "intro":<br>' + result.join('<br>');
}

function showSelectorElements() {
    let elements = document.querySelectorAll("p.intro");
    let result = [];
    elements.forEach(function(el) {
        result.push(el.textContent);
    });
    document.getElementById("selectorDemo").innerHTML = 'Paragraphs with class "intro":<br>' + result.join('<br>');
}

function showFormElements() {
    const x = document.forms["frm1"];
    let text = "";
    for (let i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("formDemo").innerHTML = text;
}

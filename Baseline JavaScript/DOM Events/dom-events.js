// JavaScript DOM Events Example

function changeText(id) {
    id.innerHTML = "Ooops!";
}

function displayDate() {
    document.getElementById("dateDemo").innerHTML = Date();
}

window.onload = function() {
    document.getElementById("myBtn").onclick = function() {
        document.getElementById("domBtnDemo").innerHTML = "Button clicked using DOM assignment!";
    };
};

function showLoadDemo() {
    // You can add code here for onload event
}
function showUnloadDemo() {
    // You can add code here for onunload event
}

function inputDemo() {
    let val = document.getElementById("inputField").value;
    document.getElementById("inputDemo").innerHTML = "Input: " + val;
}

function upperCase() {
    let input = document.getElementById("inputField");
    input.value = input.value.toUpperCase();
    document.getElementById("inputDemo").innerHTML = "Changed to uppercase!";
}

function mouseOverDemo() {
    document.getElementById("hoverDemo").innerHTML = "Mouse is over!";
}
function mouseOutDemo() {
    document.getElementById("hoverDemo").innerHTML = "Mouse is out!";
}

function mouseDownDemo() {
    document.getElementById("mouseDemo").innerHTML = "Mouse down!";
}
function mouseUpDemo() {
    document.getElementById("mouseDemo").innerHTML = "Mouse up!";
}
function mouseClickDemo() {
    document.getElementById("mouseDemo").innerHTML = "Mouse clicked!";
}

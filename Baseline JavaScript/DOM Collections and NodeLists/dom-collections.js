// JavaScript DOM Collections and NodeLists Example

function changeColor() {
    const myCollection = document.getElementsByTagName("p");
    for (let i = 0; i < myCollection.length; i++) {
        myCollection[i].style.color = "red";
    }
}

function changeNodeListColor() {
    const nodeList = document.querySelectorAll(".demoP");
    nodeList.forEach(function(el) {
        el.style.color = "blue";
    });
}

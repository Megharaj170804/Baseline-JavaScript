// JavaScript DOM Navigation Example

function copyH1Text() {
    var h1 = document.getElementById("demoH1");
    var p = document.getElementById("demoP");
    // Three ways to get text node value
    var text1 = h1.innerHTML;
    var text2 = h1.firstChild.nodeValue;
    var text3 = h1.childNodes[0].nodeValue;
    p.innerHTML = text1;
    document.getElementById("resultDemo").innerHTML =
        `<b>Copied using:</b><br>innerHTML: ${text1}<br>firstChild.nodeValue: ${text2}<br>childNodes[0].nodeValue: ${text3}`;
}

function showNodeNavigation() {
    var h1 = document.getElementById("demoH1");
    var p = document.getElementById("demoP");
    var body = h1.parentNode;
    var h1Sibling = h1.nextSibling;
    var pSibling = p.previousSibling;
    var info = `<b>Node Navigation:</b><br>`;
    info += `h1.parentNode.tagName: ${body.tagName}<br>`;
    info += `h1.nextSibling.nodeName: ${h1Sibling && h1Sibling.nodeName}<br>`;
    info += `p.previousSibling.nodeName: ${pSibling && pSibling.nodeName}<br>`;
    info += `body.firstChild.nodeName: ${body.firstChild && body.firstChild.nodeName}<br>`;
    info += `body.lastChild.nodeName: ${body.lastChild && body.lastChild.nodeName}<br>`;
    document.getElementById("navDemo").innerHTML = info;
}

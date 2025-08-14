// JavaScript Strings and String Functions Example

let str = "  Hello, JavaScript!  ";

function showStringExamples() {
    document.getElementById("lengthEx").textContent = 'Length: "' + str + '".length = ' + str.length;
    document.getElementById("upperEx").textContent = 'To Upper Case: "' + str + '".toUpperCase() = "' + str.toUpperCase() + '"';
    document.getElementById("lowerEx").textContent = 'To Lower Case: "' + str + '".toLowerCase() = "' + str.toLowerCase() + '"';
    document.getElementById("includesEx").textContent = 'Includes "JavaScript": "' + str + '".includes("JavaScript") = ' + str.includes("JavaScript");
    document.getElementById("indexEx").textContent = 'Index Of ",": "' + str + '".indexOf(",") = ' + str.indexOf(",");
    document.getElementById("sliceEx").textContent = 'Slice (2, 7): "' + str + '".slice(2, 7) = "' + str.slice(2, 7) + '"';
    document.getElementById("replaceEx").textContent = 'Replace "JavaScript" with "World": "' + str + '".replace("JavaScript", "World") = "' + str.replace("JavaScript", "World") + '"';
    document.getElementById("trimEx").textContent = 'Trim: "' + str + '".trim() = "' + str.trim() + '"';
}

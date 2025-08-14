// JavaScript Variables, Declaration, and Casting Example
var oldVar = "I am var";
let newLet = "I am let";
const constantVar = "I am const";
let strNumber = "123";
let num = Number(strNumber); 
let numToStr = String(num); 
let boolVal = Boolean(strNumber); 

function showVariableExamples() {
    document.getElementById("varEx").textContent = 'var oldVar = "' + oldVar + '"';
    document.getElementById("letEx").textContent = 'let newLet = "' + newLet + '"';
    document.getElementById("constEx").textContent = 'const constantVar = "' + constantVar + '"';
    document.getElementById("castEx1").textContent = 'String to Number: Number("123") = ' + num;
    document.getElementById("castEx2").textContent = 'Number to String: String(123) = "' + numToStr + '"';
    document.getElementById("castEx3").textContent = 'Any to Boolean: Boolean("123") = ' + boolVal;
}

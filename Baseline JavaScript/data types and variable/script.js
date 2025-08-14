// JavaScript Datatypes and Variables Example
let name = "Alice";
let age = 20;
let isStudent = true;
let colors = ["red", "green", "blue"];

let person = { name: "Bob", age: 30 };

function showExamples() {
    document.getElementById("stringEx").textContent = 'String: let name = "' + name + '"';
    document.getElementById("numberEx").textContent = 'Number: let age = ' + age;
    document.getElementById("booleanEx").textContent = 'Boolean: let isStudent = ' + isStudent;
    document.getElementById("arrayEx").textContent = 'Array: let colors = [' + colors.join(", ") + ']';
    document.getElementById("objectEx").textContent = 'Object: let person = { name: "' + person.name + '", age: ' + person.age + ' }';
}

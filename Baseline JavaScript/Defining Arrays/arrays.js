// JavaScript Arrays: Defining, Initializing, Iterating Example

function showArrayExamples() {
    // Defining and initializing arrays
    let fruits = ["apple", "banana", "cherry"];
    let numbers = new Array(1, 2, 3, 4);

    // Length of array
    let length = fruits.length;

    // Iterating using for loop
    let forLoopResult = [];
    for (let i = 0; i < fruits.length; i++) {
        forLoopResult.push(fruits[i]);
    }

    // Iterating using forEach
    let forEachResult = [];
    fruits.forEach(function(fruit) {
        forEachResult.push(fruit);
    });

    document.getElementById("defineEx").textContent = 'Defined arrays: [' + fruits.join(", ") + '] and [' + numbers.join(", ") + ']';
    document.getElementById("lengthEx").textContent = 'Length of fruits array: ' + length;
    document.getElementById("forLoopEx").textContent = 'Iterated with for loop: ' + forLoopResult.join(", ");
    document.getElementById("forEachEx").textContent = 'Iterated with forEach: ' + forEachResult.join(", ");
}

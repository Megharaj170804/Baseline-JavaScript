// JavaScript Type Coercion Example

function showCoercionExamples() {
    // Implicit coercion
    let result1 = '5' + 3; // '5' is string, 3 is number, result is '53' (string)
    let result2 = '5' - 3; // '5' is string, 3 is number, result is 2 (number)

    // Explicit coercion
    let str = "123";
    let num = Number(str); // Converts string to number
    let bool = Boolean(0); // Converts 0 to false

    // Comparison coercion
    let comp = (0 == false); // true, because 0 is coerced to false

    document.getElementById("implicitEx1").textContent = "'5' + 3 = '" + result1 + "' (string)";
    document.getElementById("implicitEx2").textContent = "'5' - 3 = " + result2 + " (number)";
    document.getElementById("explicitEx1").textContent = "Number('123') = " + num + " (number)";
    document.getElementById("explicitEx2").textContent = "Boolean(0) = " + bool + " (boolean)";
    document.getElementById("comparisonEx").textContent = "0 == false is " + comp;
}

// JavaScript Template Literals Example

function showTemplateLiteralExamples() {
    // Simple template literal
    let name = "Alice";
    let simple = `Hello, ${name}!`;

    // Multi-line template literal
    let multiLine = `This is line one.
This is line two.`;

    // Expression inside template literal
    let a = 5, b = 3;
    let expression = `The sum of ${a} and ${b} is ${a + b}.`;

    document.getElementById("simpleEx").textContent = 'Simple: ' + simple;
    document.getElementById("multiLineEx").textContent = 'Multi-line: ' + multiLine;
    document.getElementById("expressionEx").textContent = 'Expression: ' + expression;
}

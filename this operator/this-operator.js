// JavaScript 'this' Operator Example

function showThisExamples() {
    // Method example
    let person = {
        name: "Alice",
        getName: function() {
            return this.name;
        }
    };
    let methodResult = 'In method: person.getName() = ' + person.getName();

    // Global context example
    let globalResult = 'In global context: this === window is ' + (this === window);

    // Function context example
    function showThis() {
        return this === window;
    }
    let functionResult = 'In function: this === window is ' + showThis();

    document.getElementById("methodEx").textContent = methodResult;
    document.getElementById("globalEx").textContent = globalResult;
    document.getElementById("functionEx").textContent = functionResult;
}

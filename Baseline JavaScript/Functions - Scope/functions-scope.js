// JavaScript Functions and Scope Example

function showFunctionScopeExamples() {
    // Function example
    function greet(name) {
        return "Hello, " + name;
    }
    let funcResult = greet("Alice");

    // Global scope example
    var globalVar = "I am global";
    let globalResult = globalVar;

    // Function scope example
    function testFunctionScope() {
        var functionVar = "I am function scoped";
        return functionVar;
    }
    let functionScopeResult = testFunctionScope();

    // Block scope example
    let blockScopeResult;
    if (true) {
        let blockVar = "I am block scoped";
        blockScopeResult = blockVar;
    }

    document.getElementById("funcEx").textContent = 'Function: greet("Alice") = ' + funcResult;
    document.getElementById("globalEx").textContent = 'Global Scope: ' + globalResult;
    document.getElementById("functionScopeEx").textContent = 'Function Scope: ' + functionScopeResult;
    document.getElementById("blockScopeEx").textContent = 'Block Scope: ' + blockScopeResult;
}

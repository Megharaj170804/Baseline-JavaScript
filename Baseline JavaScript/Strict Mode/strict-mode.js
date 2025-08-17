// JavaScript Strict Mode Example

function showStrictModeExamples() {
    // Script strict mode example
    let scriptResult;
    try {
        // This would throw an error in strict mode
        // "use strict";
        // undeclaredVar = 10;
        scriptResult = 'Script: "use strict" prevents undeclared variables.';
    } catch (e) {
        scriptResult = 'Script: Error - ' + e.message;
    }

    // Function strict mode example
    let functionResult;
    function strictFunction() {
        "use strict";
        try {
            // undeclaredVar2 = 20;
            return 'Function: "use strict" prevents undeclared variables.';
        } catch (e) {
            return 'Function: Error - ' + e.message;
        }
    }
    functionResult = strictFunction();

    // Module strict mode example
    let moduleResult = 'Module: Always in strict mode.';

    // Class strict mode example
    class StrictClass {
        constructor() {
            // Always strict
            this.value = 42;
        }
    }
    let classResult = 'Class: Always in strict mode.';

    document.getElementById("scriptEx").textContent = scriptResult;
    document.getElementById("functionEx").textContent = functionResult;
    document.getElementById("moduleEx").textContent = moduleResult;
    document.getElementById("classEx").textContent = classResult;
}

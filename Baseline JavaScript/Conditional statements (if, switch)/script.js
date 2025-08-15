// JavaScript Conditional Statements Example

function showConditionalExamples() {
    // if statement example
    let age = 18;
    let ifResult;
    if (age >= 18) {
        ifResult = "You are an adult.";
    } else {
        ifResult = "You are a minor.";
    }

    // switch statement example
    let day = "Monday";
    let switchResult;
    switch (day) {
        case "Monday":
            switchResult = "Start of the week!";
            break;
        case "Friday":
            switchResult = "End of the work week!";
            break;
        case "Saturday":
        case "Sunday":
            switchResult = "Weekend!";
            break;
        default:
            switchResult = "Just another day.";
    }

    document.getElementById("ifEx").textContent = 'if statement: ' + ifResult;
    document.getElementById("switchEx").textContent = 'switch statement: ' + switchResult;
}

// JavaScript Control Statements: Loops Example

function showLoopExamples() {
    // for loop example
    let forResult = [];
    for (let i = 1; i <= 5; i++) {
        forResult.push(i);
    }

    // while loop example
    let whileResult = [];
    let j = 1;
    while (j <= 5) {
        whileResult.push(j);
        j++;
    }

    // forEach loop example
    let arr = ["apple", "banana", "cherry"];
    let forEachResult = [];
    arr.forEach(function(item) {
        forEachResult.push(item);
    });

    document.getElementById("forEx").textContent = 'for loop: ' + forResult.join(", ");
    document.getElementById("whileEx").textContent = 'while loop: ' + whileResult.join(", ");
    document.getElementById("forEachEx").textContent = 'forEach loop: ' + forEachResult.join(", ");
}

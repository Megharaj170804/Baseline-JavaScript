// JavaScript Iterator Protocol Example

function showIteratorExamples() {
    // Built-in iterable example (Array)
    let arr = [1, 2, 3];
    let arrResult = [];
    for (let value of arr) {
        arrResult.push(value);
    }

    // Custom iterator example
    let myIterable = {
        [Symbol.iterator]: function() {
            let step = 0;
            return {
                next: function() {
                    step++;
                    if (step === 1) return { value: 'a', done: false };
                    if (step === 2) return { value: 'b', done: false };
                    return { value: undefined, done: true };
                }
            };
        }
    };
    let customResult = [];
    for (let value of myIterable) {
        customResult.push(value);
    }

    document.getElementById("arrayEx").textContent = 'Array iteration: ' + arrResult.join(", ");
    document.getElementById("customEx").textContent = 'Custom iterator: ' + customResult.join(", ");
}

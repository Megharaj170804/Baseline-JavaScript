// JavaScript Collections Example

function showCollectionsExamples() {
    // Array example
    let arr = [1, 2, 3];
    let arrResult = arr.join(", ");

    // Set example
    let set = new Set([1, 2, 3, 2]); // Only unique values
    let setResult = Array.from(set).join(", ");

    // Map example
    let map = new Map();
    map.set('a', 1);
    map.set('b', 2);
    let mapResult = [];
    map.forEach(function(value, key) {
        mapResult.push(key + ': ' + value);
    });

    document.getElementById("arrayEx").textContent = 'Array: [' + arrResult + ']';
    document.getElementById("setEx").textContent = 'Set: {' + setResult + '}';
    document.getElementById("mapEx").textContent = 'Map: {' + mapResult.join(", ") + '}';
}

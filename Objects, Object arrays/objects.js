// JavaScript Objects and Object Arrays Example

function showObjectExamples() {
    // Object example
    let person = { name: "Alice", age: 30 };
    let objectResult = 'Object: { name: "' + person.name + '", age: ' + person.age + ' }';

    // Object array example
    let people = [
        { name: "Bob", age: 25 },
        { name: "Carol", age: 28 },
        { name: "Dave", age: 22 }
    ];
    let arrayResult = 'Object Array: [' + people.map(p => '{ name: "' + p.name + '", age: ' + p.age + ' }').join(', ') + ']';

    // Iterating over object array
    let iterateResult = 'Names: ' + people.map(p => p.name).join(', ');

    document.getElementById("objectEx").textContent = objectResult;
    document.getElementById("arrayEx").textContent = arrayResult;
    document.getElementById("iterateEx").textContent = iterateResult;
}

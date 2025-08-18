// JavaScript DOM Forms Example

function showFormValues() {
    const form = document.forms["myForm"];
    const name = form.elements["inputName"].value;
    const age = form.elements["inputAge"].value;
    document.getElementById("formResult").innerHTML = 'Name: ' + name + '<br>Age: ' + age;
}

function setFormValues() {
    document.getElementById("inputName").value = "Alice";
    document.getElementById("inputAge").value = 25;
}

function resetForm() {
    document.getElementById("myForm").reset();
}

// JavaScript DOM Documents Example

function showDocumentExamples() {
    // document.title example
    document.getElementById("titleEx").textContent = 'document.title: ' + document.title;

    // document.body example
    document.getElementById("bodyEx").textContent = 'document.body exists: ' + (document.body !== null);

    // document.URL example
    document.getElementById("urlEx").textContent = 'document.URL: ' + document.URL;

    // document.createElement example
    let newDiv = document.createElement("div");
    newDiv.textContent = "Created with document.createElement!";
    document.getElementById("createEx").textContent = 'document.createElement: ' + newDiv.textContent;
}

function addParagraph() {
    let para = document.createElement("p");
    para.textContent = "Prologue: The Spark of Creation In the heart of Jalgaon, a young man named Megharaj Dandgavhal dreamed of building worlds. Not with bricks and mortar, but with lines of code that could connect people, solve problems, and create new realities. His journey began not in a grand laboratory, but in the quiet corners of his mind, where ideas sparked like constellations in the night sky";
    document.getElementById("paragraphs").appendChild(para);
}

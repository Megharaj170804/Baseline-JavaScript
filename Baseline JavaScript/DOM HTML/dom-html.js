// JavaScript DOM HTML Example

function changeParagraph() {
    document.getElementById("p1").innerHTML = "New text!";
}

function changeHeading() {
    const element = document.getElementById("id01");
    element.innerHTML = "New Heading";
}

function changeImage() {
    document.getElementById("myImage").src = "https://media.istockphoto.com/id/1473234894/vector/cute-emotional-emoji-emoticon-with-tears-of-joy.jpg?s=612x612&w=0&k=20&c=ss-kN69xEbBFwX91KbNsTB8XaHv60zHksdXhOW99Jh0=g";
}

function showDate() {
    document.getElementById("demo").innerHTML = "Date : " + Date();
}

function writeDocument() {
    document.write("This text was written using document.write()!");
}
